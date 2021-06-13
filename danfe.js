const DocumentoPDF = require("./documentoPDF.js");

class Danfe {

    constructor(obj)
    {
        this.xDoc = new DocumentoPDF(obj);
    }

    Header(nota)
    {
        let nf = nota.NFe.infNFe.ide.nNF.toString().padStart(6,'0');
        let serie = nota.NFe.infNFe.ide.serie.toString().padStart(3,'0');

        this.xDoc.AddLabelFree({ left:37, top:85, width:100, titulo:'DANFE', fontSize: 13, fontAlignTitulo:'center'  });
        this.xDoc.AddLabelFree({ left:37, top:100, width:100, titulo:'Documento Auxiliar da Nota Fiscal Eletrônica', fontSize: 8, fontAlignTitulo:'center'  });
        this.xDoc.AddLabelFree({ left:37, top:125, width:100, titulo:'0 - ENTRADA\n1 - SAÍDA', fontSize: 8});
        this.xDoc.AddLabelFree({ left:37, top:150, width:100, titulo:'Nº '+nf+'\nSérie '+serie+'\n1 / 1', fontSize: 9, fontAlignTitulo:'center'  });
        this.xDoc.AddLabelFree({ left:18, top:85, width:100, fontAlignTitulo:'center', titulo:nota.NFe.infNFe.emit.xNome+'\n'+nota.NFe.infNFe.emit.enderEmit.xLgr+'\n'+nota.NFe.infNFe.emit.enderEmit.xBairro+'\n'+nota.NFe.infNFe.emit.enderEmit.xMun+'\n'+nota.NFe.infNFe.emit.enderEmit.UF, fontSize: 8});

        this.xDoc.AddImage({logotipo:nota.logotipo, left:0.9, top:80});

        this.xDoc.AddBox({largura:75, titulo:'RECEBEMOS O PRODUTO EM QUESTAO'});
        this.xDoc.AddBox({largura:25, altura:2, titulo:'NF-e\nNº '+nf+'\nSérie '+serie, fontSizeTiulo: 13, fontAlignTitulo:'center' });
        this.xDoc.AddRow();
        this.xDoc.AddBox({largura:15, titulo:'Data Recebimento'});
        this.xDoc.AddBox({largura:60, titulo:'Identificação e Assinatura do Recebedor'});
        this.xDoc.AddRow();
        this.xDoc.AddRow();
        this.xDoc.AddBox({largura:35, altura:4});
        this.xDoc.AddBox({largura:20, altura:4});
        this.xDoc.AddBox({largura:45, altura:4});
        this.xDoc.AddRow();
        this.xDoc.AddRow();
        this.xDoc.AddBox({largura:35, invisivel:true});
        this.xDoc.AddBox({largura:20, invisivel:true});
        this.xDoc.AddBox({largura:45, titulo:'Chave de Acesso', conteudo: ''});
        this.xDoc.AddRow();
        this.xDoc.AddBox({largura:35, invisivel:true});
        this.xDoc.AddBox({largura:20, invisivel:true});
        this.xDoc.AddBox({largura:45, titulo:'Consulta de Autenticidade no Portal Nacional da NF-e'});
        this.xDoc.AddRow();
        this.xDoc.AddBox({largura:55, titulo:'Natureza da Operação', conteudo:nota.NFe.infNFe.ide.natOp});
        this.xDoc.AddBox({largura:45, titulo:'Protocolo de Autorização de Uso'});
        this.xDoc.AddRow();
        this.xDoc.AddBox({largura:33, titulo:'Inscrição Estadual', conteudo:nota.NFe.infNFe.emit.IE});
        this.xDoc.AddBox({largura:33, titulo:'Inscrição Estadual do Subst. Tribut.'});
        this.xDoc.AddBox({largura:34, titulo:'CNPJ', conteudo:nota.NFe.infNFe.emit.CNPJ});
    }

    Footer(nota)
    {
        this.xDoc.AddRow();
        this.xDoc.AddTitulo({titulo:'DADOS DOS ADICIONAIS'});
        this.xDoc.AddBox({largura:50, titulo:'Informações Complementares', altura:4, conteudo:nota.NFe.infNFe.infAdic.infCpl});
        this.xDoc.AddBox({largura:50, titulo:'Reservado ao Fisco', altura:4});
    }

    CentroPrimeiraPagina(nota)
    {
        this.xDoc.AddRow();
        this.xDoc.AddTitulo({titulo:'DESTINATÁRIO / REMETENTE'});
        this.xDoc.AddBox({largura:55, titulo:'Nome / Razão Social', conteudo:nota.NFe.infNFe.dest.xNome});
        this.xDoc.AddBox({largura:30, titulo:'CNPJ / CPF', conteudo:nota.NFe.infNFe.dest.CPF});
        this.xDoc.AddBox({largura:15, titulo:'Data de Emissão', conteudo:this.FormataData(nota.NFe.infNFe.ide.dhEmi)});
        this.xDoc.AddRow();
        this.xDoc.AddBox({largura:50, titulo:'Endereço', conteudo:nota.NFe.infNFe.dest.enderDest.xLgr});
        this.xDoc.AddBox({largura:20, titulo:'Bairro / Distrito', conteudo:nota.NFe.infNFe.dest.enderDest.xBairro});
        this.xDoc.AddBox({largura:15, titulo:'CEP', conteudo:nota.NFe.infNFe.dest.enderDest.CEP});
        this.xDoc.AddBox({largura:15, titulo:'Data da Saída'});
        this.xDoc.AddRow();
        this.xDoc.AddBox({largura:50, titulo:'Município', conteudo:nota.NFe.infNFe.dest.enderDest.xMun});
        this.xDoc.AddBox({largura:5, titulo:'UF', conteudo:nota.NFe.infNFe.dest.enderDest.UF});
        this.xDoc.AddBox({largura:15, titulo:'Fone / Fax', conteudo:nota.NFe.infNFe.dest.enderDest.fone});
        this.xDoc.AddBox({largura:15, titulo:'Inscrição Estadual'});
        this.xDoc.AddBox({largura:15, titulo:'Hora da Saída'});
        this.xDoc.AddRow();
        this.xDoc.AddTitulo({titulo:'CÁLCULO DO IMPOSTO'});
        this.xDoc.AddBox({largura:14, titulo:'Base Calc. Imposto', conteudo:this.FormataValor(nota.NFe.infNFe.total.ICMSTot.vBC), fontAlignConteudo:'right'});
        this.xDoc.AddBox({largura:14, titulo:'Valor do ICMS', conteudo:this.FormataValor(nota.NFe.infNFe.total.ICMSTot.vICMS), fontAlignConteudo:'right'});
        this.xDoc.AddBox({largura:14, titulo:'Base Calc ICMS ST', conteudo:this.FormataValor(nota.NFe.infNFe.total.ICMSTot.vBC), fontAlignConteudo:'right'});
        this.xDoc.AddBox({largura:14, titulo:'Valor ICMS ST', conteudo:this.FormataValor(nota.NFe.infNFe.total.ICMSTot.vST), fontAlignConteudo:'right'});
        this.xDoc.AddBox({largura:14, titulo:'Valor Imp Importação', conteudo:this.FormataValor(nota.NFe.infNFe.total.ICMSTot.vII), fontAlignConteudo:'right'});
        this.xDoc.AddBox({largura:14, titulo:'Valor PIS', conteudo:this.FormataValor(nota.NFe.infNFe.total.ICMSTot.vPIS), fontAlignConteudo:'right'});
        this.xDoc.AddBox({largura:16, titulo:'Valor Total dos Produtos', conteudo:this.FormataValor(nota.NFe.infNFe.total.ICMSTot.vProd), fontAlignConteudo:'right'});
        this.xDoc.AddRow();
        this.xDoc.AddBox({largura:14, titulo:'Valor Frete', conteudo:this.FormataValor(nota.NFe.infNFe.total.ICMSTot.vFrete), fontAlignConteudo:'right'});
        this.xDoc.AddBox({largura:14, titulo:'Valor do Seguro', conteudo:this.FormataValor(nota.NFe.infNFe.total.ICMSTot.vSeg), fontAlignConteudo:'right'});
        this.xDoc.AddBox({largura:14, titulo:'Desconto', conteudo:this.FormataValor(nota.NFe.infNFe.total.ICMSTot.vDesc), fontAlignConteudo:'right'});
        this.xDoc.AddBox({largura:14, titulo:'Outras Despesas', conteudo:this.FormataValor(nota.NFe.infNFe.total.ICMSTot.vOutro), fontAlignConteudo:'right'});
        this.xDoc.AddBox({largura:14, titulo:'Valor Total IPI', conteudo:this.FormataValor(nota.NFe.infNFe.total.ICMSTot.vIPI), fontAlignConteudo:'right'});
        this.xDoc.AddBox({largura:14, titulo:'Valor COFINS', conteudo:this.FormataValor(nota.NFe.infNFe.total.ICMSTot.vCOFINS), fontAlignConteudo:'right'});
        this.xDoc.AddBox({largura:16, titulo:'Valor Total Nota', conteudo:this.FormataValor(nota.NFe.infNFe.total.ICMSTot.vNF), fontAlignConteudo:'right'});
        this.xDoc.AddRow();
        this.xDoc.AddTitulo({titulo:'TRANSPORTADOR / VOLUMES TRANSPORTADOS'});
        this.xDoc.AddBox({largura:35, titulo:'Nome / Razão Social', conteudo:nota.NFe.infNFe.transp.transporta.xNome});
        this.xDoc.AddBox({largura:10, titulo:'Frete por Conta', conteudo:nota.NFe.infNFe.transp.modFrete});
        this.xDoc.AddBox({largura:15, titulo:'Codigo ANTT'});
        this.xDoc.AddBox({largura:10, titulo:'Placa do Veículo'});
        this.xDoc.AddBox({largura:5, titulo:'UF'});
        this.xDoc.AddBox({largura:25, titulo:'CNPJ / CPF', conteudo:nota.NFe.infNFe.transp.transporta.CNPJ});
        this.xDoc.AddRow();
        this.xDoc.AddBox({largura:45, titulo:'Endereço', conteudo:nota.NFe.infNFe.transp.transporta.xEnder});
        this.xDoc.AddBox({largura:25, titulo:'Município', conteudo:nota.NFe.infNFe.transp.transporta.xMun});
        this.xDoc.AddBox({largura:5, titulo:'UF', conteudo:nota.NFe.infNFe.transp.transporta.UF});
        this.xDoc.AddBox({largura:25, titulo:'Inscrição Estadual'});
        this.xDoc.AddRow();
        this.xDoc.AddBox({largura:10, titulo:'Quantidade'});
        this.xDoc.AddBox({largura:15, titulo:'Espécie'});
        this.xDoc.AddBox({largura:15, titulo:'Marca'});
        this.xDoc.AddBox({largura:15, titulo:'Numeração'});
        this.xDoc.AddBox({largura:22, titulo:'Peso Bruto'});
        this.xDoc.AddBox({largura:23, titulo:'Peso Líquido'});
    }

    HeaderProdutos()
    {
        this.xDoc.AddRow();
        this.xDoc.AddTitulo({titulo:'DADOS DOS PRODUTOS / SERVIÇOS'});
        this.xDoc.AddBox({largura:10, titulo:'Codigo', altura:0.8});
        this.xDoc.AddBox({largura:35, titulo:'Descriçao Produto / Serviço', altura:0.8});
        this.xDoc.AddBox({largura:7, titulo:'NCM', altura:0.8});
        this.xDoc.AddBox({largura:5, titulo:'CST', altura:0.8});
        this.xDoc.AddBox({largura:5, titulo:'CFOP', altura:0.8});
        this.xDoc.AddBox({largura:3, titulo:'UM', altura:0.8});
        this.xDoc.AddBox({largura:5, titulo:'Qtd', altura:0.8});
        this.xDoc.AddBox({largura:5, titulo:'Valor Unit', altura:0.8});
        this.xDoc.AddBox({largura:5, titulo:'Valor Total', altura:0.8});
        this.xDoc.AddBox({largura:5, titulo:'Base ICMS', altura:0.8});
        this.xDoc.AddBox({largura:5, titulo:'Valor ICMS', altura:0.8});
        this.xDoc.AddBox({largura:5, titulo:'Aliq ICMS', altura:0.8});
        this.xDoc.AddBox({largura:5, titulo:'Aliq IPI', altura:0.8});
    }

    DetailProdutos(det)
    {
        let invisivel = det == undefined;
        this.xDoc.AddRow({altura:20});
        this.xDoc.AddBox({invisivel:invisivel, largura:10,altura:0.8,fontSizeConteudo:7, conteudo:(det != undefined) ? det.prod.cProd : ''});
        this.xDoc.AddBox({invisivel:invisivel, largura:35,altura:0.8,fontSizeConteudo:7, conteudo:(det != undefined) ? det.prod.xProd: ''});
        this.xDoc.AddBox({invisivel:invisivel, largura:7,altura:0.8,fontSizeConteudo:7, conteudo:(det != undefined) ? det.prod.NCM: ''});
        this.xDoc.AddBox({invisivel:invisivel, largura:5,altura:0.8,fontSizeConteudo:7, conteudo:''});
        this.xDoc.AddBox({invisivel:invisivel, largura:5,altura:0.8,fontSizeConteudo:7, conteudo:(det != undefined) ? det.prod.CFOP: ''});
        this.xDoc.AddBox({invisivel:invisivel, largura:3,altura:0.8,fontSizeConteudo:7, conteudo:(det != undefined) ? det.prod.uCom: ''});
        this.xDoc.AddBox({invisivel:invisivel, largura:5,altura:0.8,fontSizeConteudo:7, conteudo:(det != undefined) ? det.prod.qCom: '', fontAlignConteudo:'right'});
        this.xDoc.AddBox({invisivel:invisivel, largura:5,altura:0.8,fontSizeConteudo:7, conteudo:this.FormataValor((det != undefined) ? det.prod.vUnCom: ''), fontAlignConteudo:'right'});
        this.xDoc.AddBox({invisivel:invisivel, largura:5,altura:0.8,fontSizeConteudo:7, conteudo:this.FormataValor((det != undefined) ? det.prod.vProd: ''), fontAlignConteudo:'right'});
        this.xDoc.AddBox({invisivel:invisivel, largura:5,altura:0.8,fontSizeConteudo:7, conteudo:'', fontAlignConteudo:'right'});
        this.xDoc.AddBox({invisivel:invisivel, largura:5,altura:0.8,fontSizeConteudo:7, conteudo:'', fontAlignConteudo:'right'});
        this.xDoc.AddBox({invisivel:invisivel, largura:5,altura:0.8,fontSizeConteudo:7, conteudo:'', fontAlignConteudo:'right'});
        this.xDoc.AddBox({invisivel:invisivel, largura:5,altura:0.8,fontSizeConteudo:7, conteudo:'', fontAlignConteudo:'right'});
    }

    Gerar(nota)
    {
        let paginas = 1;
        if (nota.NFe.infNFe.det.length > 8)
        {
            let total = nota.NFe.infNFe.det.length - 8;
            total = total / 20;
            if (total.toString().indexOf(".") > -1)
            {
                paginas++;
            }
            paginas += Math.trunc(total);
        }
        this.Header(nota);
        this.CentroPrimeiraPagina(nota);
        this.HeaderProdutos();
        let itemProdutos = 0;
        while(itemProdutos <= 7)
        {
           this.DetailProdutos(nota.NFe.infNFe.det[itemProdutos]);
           itemProdutos++;
        }
        this.Footer(nota);
        let i = 1;
        while(i != paginas)
        {
            this.xDoc.AddPage();
            this.Header(nota);
            this.HeaderProdutos();
            let quebra = 1
            while(quebra <= 20)
            {
                // if (itemProdutos >= nota.NFe.infNFe.det.length)
                //     break;
                this.DetailProdutos(nota.NFe.infNFe.det[itemProdutos]);
                itemProdutos++;
                quebra++;
            }
            this.Footer(nota);
            i++;
        }
        this.xDoc.Close();
    }

    FormataData(_dt)
    {
        return _dt.getDate().toString().padStart(2,0) +"/" + _dt.getMonth().toString().padStart(2,0) + "/" + _dt.getFullYear()
    }

    FormataValor(_vl)
    {
        let retorno = "";
        if (typeof _vl == "string")
            retorno = _vl;
        else
            retorno = _vl.toFixed(2).split('.').join(',');
        
        return retorno
    }
}

module.exports = Danfe;