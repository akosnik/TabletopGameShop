using aspnetserver.Persistence.Models;
using aspnetserver.Dtos.Product;
using aspnetserver.Dtos.User;
using AutoMapper;


namespace aspnetserver
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Product, GetProductDto>();
            CreateMap<ProductFormDto, Product>();
            CreateMap<UserRegisterDto, User>();
            CreateMap<User, GetUserDto>();

        }
    }
}
