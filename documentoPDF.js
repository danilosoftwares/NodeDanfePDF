const PDFDocument = require('pdfkit');

class DocumentoPDF {

    constructor(resultado){
        this.doc = new PDFDocument();

        this.Start();

        this.doc.pipe(resultado);
    }

    Start()
    {
        this.tamanho_maximo = 600;
        this.base_altura = 25;
        this.inicio_esquerda = 5;
        this.inicio_acima = 5;    
        
        this.altura_atual = this.inicio_acima;
        this.left_atual = this.inicio_esquerda;
    }

    AddImage(obj)
    {
        if (obj.logotipo != undefined)
        {
            let left = ((this.tamanho_maximo * obj.left) / 100);
            this.doc.image(obj.logotipo, left, obj.top, {width:100, height:100});
        }
    }

    AddRow(obj)
    {
        let nova = this.base_altura;
        if (obj != undefined)
        {
           if (obj.altura > 0)
              nova = obj.altura;
        }
           
        this.altura_atual += nova;
        this.left_atual = this.inicio_esquerda;
     }

     AddLabelFree(obj){
        let size = 7;
        if (obj.fontSize > 0)
        {
            size = obj.fontSize;
        }
        let alg = 'left';
        if (obj.fontAlignTitulo != undefined)
        {
            alg = obj.fontAlignTitulo;
        }        
        let left = ((this.tamanho_maximo * obj.left) / 100);
        this.doc.fontSize(size)
                .text(obj.titulo, left, obj.top,  {align:alg, width: obj.width});          
     }

     AddTitulo(obj){
        let size = 7;
        if (obj.fontSize > 0)
        {
            size = obj.fontSize;
        }
        this.doc.fontSize(size).font('Helvetica-Bold').text(obj.titulo, 5, this.altura_atual + 3,  {width: this.tamanho_maximo});  
        this.altura_atual += 12;    
     }

     
    AddBox(obj){
        let altura = this.base_altura;
        let w = this.tamanho_maximo;
        if (obj != undefined) 
        {
        if (obj.altura > 0)
            altura = this.base_altura * obj.altura;
        if (obj.largura > 0)
            w = ((this.tamanho_maximo * obj.largura) / 100);
        }
    
        if ((obj.invisivel == undefined) || (obj.invisivel == false))
        {
            this.doc.lineJoin('round').rect(this.left_atual, this.altura_atual, w, altura).stroke();
        }
    
        if (obj.titulo != undefined)
        {
            let fSize = 7;
            if (obj.fontSizeTiulo > 0)
            {
                fSize = obj.fontSizeTiulo;
            }
            let alg = 'left';
            if (obj.fontAlignTitulo != undefined)
            {
                alg = obj.fontAlignTitulo;
            }
            this.doc.fontSize(fSize).text(obj.titulo, this.left_atual + 2, this.altura_atual + 3,  {align: alg, width: w});     
        }
            
        if (obj.conteudo != undefined)
        {
            let fSize = 9;
            if (obj.fontSizeConteudo > 0)
            {
                fSize = obj.fontSizeConteudo;
            }
            let alg = 'left';
            if (obj.fontAlignConteudo != undefined)
            {
                alg = obj.fontAlignConteudo;
            }
            let posicao = (this.altura_atual + 15);
            if (obj.altura < 0.9)
            {
                let dif =  (altura - this.base_altura);
                if (dif < 0)
                    dif = dif * -1;
                posicao = posicao - dif;
            }
            this.doc.fontSize(fSize).text(obj.conteudo, this.left_atual + 2,  posicao ,  {align: alg, width: w - 4}); 
        }        
    
        if ((obj.addColuna == undefined) || (obj.addColuna))
        {
            this.left_atual += w;
        }        
    }

    AddPage(){
        this.doc.addPage();
        this.Start();
    }

    Close(){
        this.doc.end();
    }
}

module.exports = DocumentoPDF;