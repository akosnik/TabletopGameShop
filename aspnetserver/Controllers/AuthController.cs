using aspnetserver.Dtos.User;
using aspnetserver.Persistence.Models;
using aspnetserver.Persistence.Repository.AuthRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace aspnetserver.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;
        private readonly IAuthRepository _authRepository;

        public AuthController(ILogger<AuthController> logger, IAuthRepository authRepository)
        {
            _logger = logger;
            _authRepository = authRepository;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginDto userLogin)
        {
            var user = await _authRepository.Login(userLogin.Email, userLogin.Password);
            
            if (user == null) return Unauthorized();

            return Ok(user);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserRegisterDto userRegistration)
        {
            Console.WriteLine("Log");
            if (await _authRepository.EmailExists(userRegistration.Email))
            {
                ModelState.AddModelError("Email", "Email already exists");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newUser = new User
            {
                FirstName = userRegistration.FirstName,
                LastName = userRegistration.LastName,
                Email = userRegistration.Email,
                Password = userRegistration.Password,
                ConfirmPassword = userRegistration.ConfirmPassword,
            };

            await _authRepository.Register(newUser);

            return StatusCode(201);
        }
    }
}
