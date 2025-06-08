using book2wheel.Application;
using book2wheel.Infrastructure.Implementations;
using book2wheel.Infrastructure.Persistance;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace book2wheel.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddDependencyInfrastructure(this IServiceCollection services, IConfiguration c)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
        {
            options.UseSqlServer(c.GetConnectionString("CustomsBook2WheelConnectionString"));
        });

        services.AddScoped<IApplicationRepository,ApplicationRepository>();

        return services;
    }
}