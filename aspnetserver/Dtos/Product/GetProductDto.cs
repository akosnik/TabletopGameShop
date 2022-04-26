namespace aspnetserver.Dtos.Product
{
    public class GetProductDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public int Inventory { get; set; }
        public decimal Price { get; set; }
    }
}
