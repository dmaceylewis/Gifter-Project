using Gifter.Models;

namespace Gifter.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAll();
        UserProfile GetById(int id);
        void Add(UserProfile user);
        void Update(UserProfile user);
        void Delete(int id);
        UserProfile GetUserByIdWithPosts(int id);
        List<UserProfile> GetAllUsersWithPosts();
    }
}
