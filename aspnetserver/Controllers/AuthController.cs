using aspnetserver.Persistence.Models;
using aspnetserver.Persistence.Repository.AuthRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace aspnetserver.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;
        private readonly AuthRepository _authRepository;

        public AuthController(ILogger<AuthController> logger, AuthRepository authRepository)
        {
            _logger = logger;
            _authRepository = authRepository;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(string email, string password)
        {
            var user = await _authRepository.Login(email, password);
            if (user == null) return Unauthorized();

            return Ok();
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (await _authRepository.EmailExists(user.Email))
            {
                ModelState.AddModelError("E-Mail", "E-Mail already exists");
            }

            if (!ModelState.IsValid) return BadRequest(ModelState);

            await _authRepository.Register(user);

            return StatusCode(201);
        }
    }
}
