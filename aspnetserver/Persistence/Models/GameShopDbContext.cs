using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Persistence
{
    public class GameShopDbContext : DbContext
    {
        public GameShopDbContext(DbContextOptions options) : base(options) { }

    }
}
