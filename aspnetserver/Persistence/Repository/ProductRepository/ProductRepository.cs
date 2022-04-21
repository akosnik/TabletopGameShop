using aspnetserver.Dtos.Product;
using aspnetserver.Persistence.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aspnetserver.Persistence.Repository.ProductRepository
{
    public class ProductRepository : IProductRepository
    {
        private readonly GameShopDbContext _context;
        private readonly IMapper _mapper;
        public ProductRepository(GameShopDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<List<GetProductDto>> GetAllProducts()
        {
            return await _context.Products.Select((p) => _mapper.Map<GetProductDto>(p)).ToListAsync();
        }

        public async Task<GetProductDto> GetProductById(int productId)
        {
            Product product = await _context.Products.FirstOrDefaultAsync((p) => p.Id == productId);
            return _mapper.Map<GetProductDto>(product);
        }

        public async Task<GetProductDto> AddProduct(ProductFormDto newProduct)
        {
            Product productToSave = _mapper.Map<Product>(newProduct);
            await _context.Products.AddAsync(productToSave);
            await _context.SaveChangesAsync();
            return _mapper.Map<GetProductDto>(productToSave);
        }

        public async Task<GetProductDto> UpdateProduct(ProductFormDto editedProduct, int productId)
        {
            Product product = await _context.Products.FirstOrDefaultAsync((p) => p.Id == productId);
            if (product != null)
            {
                Product productToSave = _mapper.Map<Product>(editedProduct);
                product = productToSave;
                await _context.SaveChangesAsync();
            }
            return _mapper.Map<GetProductDto>(product);
        }

        public Task<GetProductDto> DeleteProduct(int productId)
        {
            throw new System.NotImplementedException();
        }

    }
}
