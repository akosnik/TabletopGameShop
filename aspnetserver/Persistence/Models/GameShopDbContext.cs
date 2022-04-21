using aspnetserver.Persistence.Models;
using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Persistence
{
    public class GameShopDbContext : DbContext
    {
        public GameShopDbContext(DbContextOptions options) : base(options) {}
        
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        //public DbSet<CartItem> CartItems { get; set; }
        //public DbSet<ShoppingSession> ShoppingSessions { get; set; }
        //public DbSet<Address> Addresses { get; set; }

        //TODO add categories and tags
    }
}

