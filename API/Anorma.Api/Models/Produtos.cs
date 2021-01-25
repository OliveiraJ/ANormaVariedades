namespace Anorma.Api.Models
{
    public class Produtos
    {
        public int IdProduto { get; set; }
        public string nomeProduto { get; set; }
        public string marcaProduto { get; set; }
        public float preco { get; set; }
        public bool emPromocao { get; set; }
        public float descontoPromocao { get; set; }
        public bool foraEstoque { get; set; }

    }
}