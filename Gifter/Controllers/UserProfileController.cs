using Gifter.Models;
using Gifter.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }


        // GET: api/<UserProfileController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userProfileRepository.GetAll());
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var userProfile = _userProfileRepository.GetById(id);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }

        [HttpPost]
        public IActionResult Post(UserProfile userProfile)
        {
            _userProfileRepository.Add(userProfile);
            return CreatedAtAction("Get", new { id = userProfile.Id }, userProfile);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, UserProfile userProfile)
        {
            if (id != userProfile.Id)
            {
                return BadRequest();
            }

            _userProfileRepository.Update(userProfile);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userProfileRepository.Delete(id);
            return NoContent();
        }

        [HttpGet("GetAllUsersWithPosts")]
        public IActionResult GetAllUsersWithPosts()
        {
            var userProfiles = _userProfileRepository.GetAllUsersWithPosts();
            return Ok(userProfiles);
        }

        [HttpGet("GetUserByIdWithPosts/{id}")]
        public IActionResult GetUserByIdWithPosts(int id)
        {
            var userProfile = _userProfileRepository.GetUserByIdWithPosts(id);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }
    }
}
