const Danfe = require('./danfe.js');


module.exports = {        

    GeraDanfe : function(req, res){
        let nota = {};
        nota.NFe = { lista_atributos:['xmlns="http://www.portalfiscal.inf.br/nfe"'] };
        nota.NFe.infNFe = { lista_atributos:['versao="4.00"'] };
        nota.NFe.infNFe.ide = {};
        nota.NFe.infNFe.ide.cUF = '35';
        nota.NFe.infNFe.ide.cNF = '22504508';                                               
        nota.NFe.infNFe.ide.natOp = 'VENDA';                                                 
        nota.NFe.infNFe.ide.mod = '55';                                               
        nota.NFe.infNFe.ide.serie = '1';                                                 
        nota.NFe.infNFe.ide.nNF = '1';                                               
        nota.NFe.infNFe.ide.dhEmi = new Date(2019, 09, 17, 00, 00, 00, 00); //'2019-09-17T00:00:00-03:00';                                                 
        nota.NFe.infNFe.ide.tpNF = '1';                                                
        nota.NFe.infNFe.ide.idDest = '2';                                                  
        nota.NFe.infNFe.ide.cMunFG = '3550308';                                                  
        nota.NFe.infNFe.ide.tpImp = '1';                                                 
        nota.NFe.infNFe.ide.tpEmis = '1';                                                  
        nota.NFe.infNFe.ide.cDV = '2';                                               
        nota.NFe.infNFe.ide.tpAmb = '2';                                                 
        nota.NFe.infNFe.ide.finNFe = '1';                                                  
        nota.NFe.infNFe.ide.indFinal = '1';                                                    
        nota.NFe.infNFe.ide.indPres = '0';                                                   
        nota.NFe.infNFe.ide.procEmi = '0';                                                   
        nota.NFe.infNFe.ide.verProc = 'Hair - 2019.0.7.9';  
        nota.NFe.infNFe.emit = {};                                             
        nota.NFe.infNFe.emit.CNPJ = '02395172000137';                              
        nota.NFe.infNFe.emit.xNome = 'NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO';                               
        nota.NFe.infNFe.emit.xFant = 'CREATIVE SALON';                               
        nota.NFe.infNFe.emit.enderEmit = {};
        nota.NFe.infNFe.emit.enderEmit.xLgr = 'AV S 005 QD 83 LOTE 12/13';                              
        nota.NFe.infNFe.emit.enderEmit.nro = 'SN';                                         
        nota.NFe.infNFe.emit.enderEmit.xCpl = 'LOTE 12 E 13';                              
        nota.NFe.infNFe.emit.enderEmit.xBairro = 'ANAPOLIS CITY';                                 
        nota.NFe.infNFe.emit.enderEmit.cMun = '3550308';                                   
        nota.NFe.infNFe.emit.enderEmit.xMun = 'SAO PAULO';                                 
        nota.NFe.infNFe.emit.enderEmit.UF = 'SP';                                          
        nota.NFe.infNFe.emit.enderEmit.CEP = '75096050';                                   
        nota.NFe.infNFe.emit.enderEmit.cPais = '1058';                                     
        nota.NFe.infNFe.emit.enderEmit.xPais = 'BRASIL';                                                                             
        nota.NFe.infNFe.emit.IE = '147716990111';                                
        nota.NFe.infNFe.emit.CRT = '1';   
        nota.NFe.infNFe.dest = {};                                             
        nota.NFe.infNFe.dest.CPF = '79933599100';                                                                                   
        nota.NFe.infNFe.dest.xNome = 'NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL';                                                 
        nota.NFe.infNFe.dest.enderDest = {};                                   
        nota.NFe.infNFe.dest.enderDest.xLgr = 'RUA GABALA';                                                        
        nota.NFe.infNFe.dest.enderDest.nro = '088';                                                       
        nota.NFe.infNFe.dest.enderDest.xBairro = 'JUNDIAI';                                                           
        nota.NFe.infNFe.dest.enderDest.cMun = '5201108';                                                        
        nota.NFe.infNFe.dest.enderDest.xMun = 'ANAPOLIS';                                                        
        nota.NFe.infNFe.dest.enderDest.UF = 'GO';                                                      
        nota.NFe.infNFe.dest.enderDest.CEP = '75110140';                                                       
        nota.NFe.infNFe.dest.enderDest.cPais = '1058';                                                         
        nota.NFe.infNFe.dest.enderDest.xPais = 'BRASIL';                                                         
        nota.NFe.infNFe.dest.enderDest.fone = '62996401107';                                                                                             
        nota.NFe.infNFe.dest.indIEDest = '2';   

        nota.NFe.infNFe.det = [];

        let item = { lista_atributos:['nItem="1"'] };                            
        item.prod = {};                                        
        item.prod.cProd = '123';                                                         
        item.prod.cEAN = 'SEM GTIN';                                                        
        item.prod.xProd = 'PRODUTO TESTE';                                                         
        item.prod.NCM = '99980101';                                                       
        item.prod.CFOP = '5101';                                                        
        item.prod.uCom = 'UN';                                                        
        item.prod.qCom = 1;                                                        
        item.prod.vUnCom = 1;                                                          
        item.prod.vProd = 1;                                                         
        item.prod.cEANTrib = 'SEM GTIN';                                                            
        item.prod.uTrib = 'UM';                                                         
        item.prod.qTrib = 1;                                                         
        item.prod.vUnTrib = 1;                                                           
        item.prod.indTot = '1';                                                                                             
        item.imposto = {};                                    
        item.imposto.ICMS = {};                                         
        item.imposto.ICMS.ICMSSN102 = {};                                     
        item.imposto.ICMS.ICMSSN102.orig = '0';                                                        
        item.imposto.ICMS.ICMSSN102.CSOSN = '103';                                                                                           
        item.imposto.IPI = {};                                      
        item.imposto.IPI.cEnq = '999';                                                        
        item.imposto.IPI.IPINT = {};                                          
        item.imposto.IPI.IPINT.CST = '53';                                                                                        
        item.imposto.PIS = {};                                             
        item.imposto.PIS.PISAliq = {};                                        
        item.imposto.PIS.PISAliq.CST = '01';                                                       
        item.imposto.PIS.PISAliq.vBC = '0.00';                                                       
        item.imposto.PIS.PISAliq.pPIS = '0.0000';                                                        
        item.imposto.PIS.PISAliq.vPIS = '0.00';                                                                                    
        item.imposto.COFINS = {};                                            
        item.imposto.COFINS.COFINSAliq = {};                                      
        item.imposto.COFINS.COFINSAliq.CST = '01';                                                       
        item.imposto.COFINS.COFINSAliq.vBC = '0.00';                                                       
        item.imposto.COFINS.COFINSAliq.pCOFINS = '0.0000';                                                           
        item.imposto.COFINS.COFINSAliq.vCOFINS = '0.00';   

        nota.NFe.infNFe.det.push(item);

        let i = 0;
        while(i != 36)
        {
            item = { lista_atributos:['nItem="2"'] };                            
            item.prod = {};                                        
            item.prod.cProd = i.toString();                                                         
            item.prod.cEAN = 'SEM GTIN';                                                        
            item.prod.xProd = 'PRODUTO TESTE';                                                         
            item.prod.NCM = '99980101';                                                       
            item.prod.CFOP = '5101';                                                        
            item.prod.uCom = 'UM';                                                        
            item.prod.qCom = 1;                                                        
            item.prod.vUnCom = 1;                                                          
            item.prod.vProd = 1;                                                         
            item.prod.cEANTrib = 'SEM GTIN';                                                            
            item.prod.uTrib = 'UN';                                                         
            item.prod.qTrib = 1;                                                         
            item.prod.vUnTrib = 1;                                                           
            item.prod.indTot = '1';                                                                                          
            item.imposto = {};                                    
            item.imposto.ICMS = {};                                         
            item.imposto.ICMS.ICMSSN102 = {};                                     
            item.imposto.ICMS.ICMSSN102.orig = '0';                                                        
            item.imposto.ICMS.ICMSSN102.CSOSN = '103';                                                                                           
            item.imposto.IPI = {};                                      
            item.imposto.IPI.cEnq = '999';                                                        
            item.imposto.IPI.IPINT = {};                                          
            item.imposto.IPI.IPINT.CST = '53';                                                                                        
            item.imposto.PIS = {};                                             
            item.imposto.PIS.PISAliq = {};                                        
            item.imposto.PIS.PISAliq.CST = '01';                                                       
            item.imposto.PIS.PISAliq.vBC = '0.00';                                                       
            item.imposto.PIS.PISAliq.pPIS = '0.0000';                                                        
            item.imposto.PIS.PISAliq.vPIS = '0.00';                                                                                    
            item.imposto.COFINS = {};                                            
            item.imposto.COFINS.COFINSAliq = {};                                      
            item.imposto.COFINS.COFINSAliq.CST = '01';                                                       
            item.imposto.COFINS.COFINSAliq.vBC = '0.00';                                                       
            item.imposto.COFINS.COFINSAliq.pCOFINS = '0.0000';                                                           
            item.imposto.COFINS.COFINSAliq.vCOFINS = '0.00';   

            nota.NFe.infNFe.det.push(item);
            i++;
        }

        nota.NFe.infNFe.total = {};                                         
        nota.NFe.infNFe.total.ICMSTot = {};                                         
        nota.NFe.infNFe.total.ICMSTot.vBC = 0;                                                       
        nota.NFe.infNFe.total.ICMSTot.vICMS = '0.00';                                                         
        nota.NFe.infNFe.total.ICMSTot.vICMSDeson = '0.00';                                                              
        nota.NFe.infNFe.total.ICMSTot.vFCP = '0.00';                                                        
        nota.NFe.infNFe.total.ICMSTot.vBCST = '0.00';                                                         
        nota.NFe.infNFe.total.ICMSTot.vST = '0.00';                                                       
        nota.NFe.infNFe.total.ICMSTot.vFCPST = '0.00';                                                          
        nota.NFe.infNFe.total.ICMSTot.vFCPSTRet = '0.00';                                                             
        nota.NFe.infNFe.total.ICMSTot.vProd = '1.00';                                                         
        nota.NFe.infNFe.total.ICMSTot.vFrete = '0.00';                                                          
        nota.NFe.infNFe.total.ICMSTot.vSeg = '0.00';                                                        
        nota.NFe.infNFe.total.ICMSTot.vDesc = '0.00';                                                         
        nota.NFe.infNFe.total.ICMSTot.vII = '0.00';                                                       
        nota.NFe.infNFe.total.ICMSTot.vIPI = '0.00';                                                        
        nota.NFe.infNFe.total.ICMSTot.vIPIDevol = '0.00';                                                             
        nota.NFe.infNFe.total.ICMSTot.vPIS = '0.00';                                                        
        nota.NFe.infNFe.total.ICMSTot.vCOFINS = '0.00';                                                           
        nota.NFe.infNFe.total.ICMSTot.vOutro = '0.00';                                                          
        nota.NFe.infNFe.total.ICMSTot.vNF = '1.00';     
        nota.NFe.infNFe.transp = {};                                        
        nota.NFe.infNFe.transp.modFrete  = '1';                                                            
        nota.NFe.infNFe.transp.transporta = {};                                       
        nota.NFe.infNFe.transp.transporta.CNPJ  = '11349441000110';                                                        
        nota.NFe.infNFe.transp.transporta.xNome  = 'WELLA';                                                               
        nota.NFe.infNFe.transp.transporta.IE  = '910978154935';                                                            
        nota.NFe.infNFe.transp.transporta.xEnder  = 'rua teste 48';         
        nota.NFe.infNFe.transp.transporta.xMun  = 'ADAMANTINA';                                                              
        nota.NFe.infNFe.transp.transporta.UF  = 'SP';                                                                                                     
        nota.NFe.infNFe.vol = {};                                           
        nota.NFe.infNFe.vol.qVol  = '0';   
        nota.NFe.infNFe.pag = {};                                       
        nota.NFe.infNFe.pag.detPag = {};                                      
        nota.NFe.infNFe.pag.detPag.tPag = '90';                                                              
        nota.NFe.infNFe.pag.detPag.vPag = '0.00';                                                                                                     
        nota.NFe.infNFe.infAdic = {};                                       
        nota.NFe.infNFe.infAdic.infCpl = ';;'; 

        nota.logotipo = 'coca-cola.png';

        res.setHeader('Content-type', 'application/pdf')
        const doc = new Danfe(res);
        doc.Gerar(nota);
    },

}