package com.dh.profile.service;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Service;

@Service
public class ProfileServiceImpl implements ProfileService{
    @Override
    public String profilePageOpen(HttpServletRequest request){
        return "/profile/profile";
    }
}
