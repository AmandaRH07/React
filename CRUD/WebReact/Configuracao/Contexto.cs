﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebReact.Model;

public class Contexto : DbContext
{
    public Contexto(DbContextOptions<Contexto> options) : base(options){
        Database.EnsureCreated();
	}

    public DbSet<Produto> Produto { get; set; }
}
