using aspnetserver.Persistence.Models;
using System.Threading.Tasks;

namespace aspnetserver.Persistence.Repository.AuthRepository
{
    public interface IAuthRepository
    {
        Task<User> Register(User user);
        Task<User> Login(string username, string password);
        Task<bool> EmailExists(string email);
    }
}
