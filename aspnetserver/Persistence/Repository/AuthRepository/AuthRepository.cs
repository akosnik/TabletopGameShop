using aspnetserver.Persistence.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace aspnetserver.Persistence.Repository.AuthRepository
{
    public class AuthRepository : IAuthRepository
    {
        private GameShopDbContext _context;
        
        public AuthRepository(GameShopDbContext context)
        {
            _context = context;
        }

        public async Task<User> Login(string email, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            
            if (user == null) return null;

            if (!BCrypt.Net.BCrypt.Verify(password, user.Password)) return null;

            return user;
        }

        public async Task<User> Register(User user)
        {
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            await _context.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<bool> EmailExists(string email)
        {
            if (await _context.Users.AnyAsync(u => u.Email == email)) return true;

            return false;
        }
    }
}
