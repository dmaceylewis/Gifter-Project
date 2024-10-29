using Gifter.Models;

namespace Gifter.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        Post GetById(int id);
        void Add(Post post);
        void Update(Post post);
        void Delete(int id);
        List<Post> GetAllWithComments();
        Post GetPostByIdWithComments(int id);
        List<Post> Search(string criterion, bool sortDescending);
        List<Post> GetHottestPosts(DateTime since, bool sortDescending);
        List<Post> GetPostsByUser(int userId);
    }
}
