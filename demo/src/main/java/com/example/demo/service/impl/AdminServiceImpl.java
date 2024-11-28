package com.example.demo.service.impl;

import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepository;
import com.example.demo.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminRepository adminRepository;

    @Override
    public Admin create(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    @Override
    public Admin getAdminById(Integer idAdmin) {
        return adminRepository.findById(idAdmin).get();
    }

    @Override
    public Admin update(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public String deleteAdmin(Integer idAdmin) {
        adminRepository.deleteById(idAdmin);
        return "Admin deleted successfully!";
    }

    @Override
    public Boolean validateAdmin(String username, String parola) {
        Admin admin = adminRepository.findByUsernameAndParola(username, parola); // Folosește metoda corectă
        return admin != null; // Returnează true dacă admin este găsit
    }
}
