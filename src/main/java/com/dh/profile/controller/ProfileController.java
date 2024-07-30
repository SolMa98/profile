package com.dh.profile.controller;

import com.dh.profile.service.ProfileService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@AllArgsConstructor
@RequestMapping("/")
public class ProfileController {
    private ProfileService service;

    @GetMapping()
    public String profilePageOpen(HttpServletRequest request){
        return service.profilePageOpen(request);
    }
}
