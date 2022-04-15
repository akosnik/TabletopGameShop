using System.ComponentModel.DataAnnotations;

namespace aspnetserver.Dtos.User
{
    public class UserRegisterDto
    {
        [Required]
        [Display(Name = "First Name")]
        [StringLength(32, ErrorMessage = "First Name must be minimum 2 and maximum 32 characters.", MinimumLength = 2)]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        [StringLength(32, ErrorMessage = "Last Name must be minimum 2 and maximum 32 characters.", MinimumLength = 2)]
        public string LastName { get; set; }

        [Required]
        [EmailAddress(ErrorMessage ="Please enter a valid Email.")]
        public string Email { get; set; }

        [Required]
        [StringLength(32, ErrorMessage = "Password must be minimum 8 and maximum 32 characters.", MinimumLength = 8)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [Display(Name = "Confirm Password")]
        [Compare("Password", ErrorMessage = "Passwords do not match.")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }
    }
}
