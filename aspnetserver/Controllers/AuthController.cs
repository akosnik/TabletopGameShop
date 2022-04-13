using aspnetserver.Dtos.User;
using aspnetserver.Persistence.Models;
using aspnetserver.Persistence.Repository.AuthRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
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
        public async Task<IActionResult> Register([FromBody] UserRegisterDto userInfo)
        {
            Console.WriteLine("Log");
            if (await _authRepository.EmailExists(userInfo.Email))
            {
                ModelState.AddModelError("E-Mail", "E-Mail already exists");
            }

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var newUser = new User
            {
                FirstName = userInfo.FirstName,
                LastName = userInfo.LastName,
                Email = userInfo.Email,
                Password = userInfo.Password,
                ConfirmPassword = userInfo.ConfirmPassword,
            };

            await _authRepository.Register(newUser);

            return StatusCode(201);
        }
    }
}
