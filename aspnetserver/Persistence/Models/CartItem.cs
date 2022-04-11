using System;
using System.ComponentModel.DataAnnotations;

namespace aspnetserver.Persistence.Models
{
    public class CartItem
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int ProductId { get; set; }

        [Required]
        public int SessionId { get; set; }

        [Required]
        public int Quantity { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        public Product Product { get; set; }
        public ShoppingSession Cart { get; set; }
    }
}
