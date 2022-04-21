using aspnetserver.Dtos.User;
using System.ComponentModel.DataAnnotations;

namespace aspnetserver.Dtos.Product
{
    public class ProductFormDto
    {
        [Required]
        public int UserId { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Summary { get; set; }

        [Required]
        public int Inventory { get; set; }

        [Required]
        public decimal Price { get; set; }

    }
}
