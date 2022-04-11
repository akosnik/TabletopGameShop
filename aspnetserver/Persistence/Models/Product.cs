using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace aspnetserver.Persistence.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

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

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        public User Creator { get; set; }

    }
}
