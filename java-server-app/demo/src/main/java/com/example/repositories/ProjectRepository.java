package com.example.repositories;

import org.springframework.stereotype.Repository;
import com.example.entity.*;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

@Repository
public interface ProjectRepository extends CrudRepository<Project,Long>{
	Project findByProjectIdentifier(String projectId);
	@Override
	Iterable<Project>findAll();
	
	
}
