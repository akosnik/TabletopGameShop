using System.Collections.Generic;
using aspnetserver.Dtos.Product;
using System.Threading.Tasks;

namespace aspnetserver.Persistence.Repository.ProductRepository
{
    public interface IProductRepository
    {
        Task<List<GetProductDto>> GetAllProducts();
        Task<GetProductDto> GetProductById(int productId);
        Task<GetProductDto> AddProduct(ProductFormDto newProduct);
        Task<GetProductDto> UpdateProduct(ProductFormDto editedProduct, int productId);
        Task<GetProductDto> DeleteProduct(int productId);
    }
}
