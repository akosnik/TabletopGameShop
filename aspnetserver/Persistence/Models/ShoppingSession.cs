using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace aspnetserver.Persistence.Models
{
    public class ShoppingSession
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public decimal Total { get; set; }

        [Required]
        public int CartStatusId { get; set; }

        public int ShippingAddressId { get; set; }

        public int BillingAddressId { get; set; }

        public int PaymentId { get; set; }        

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        public User User { get; set; }

        public List<CartItem> CartItems { get; set; }

        public Address ShippingAddress { get; set; }
        public Address BillingAddress { get; set; }
        public Payment Payment { get; set; }

    }
}
