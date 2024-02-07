package com.todo.miniproject.restfulwebservices;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@SuppressWarnings("ALL")
@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth {
//    @Override
//    protected void  configure(HttpSecurity http) throws Exception{
//        () -> http.csrf().disable().authorizeRequests()
//                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
//                .anyRequest().authenticated().and().httpBasic();
//    }
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.headers().frameOptions().disable();
        return http.
                authorizeHttpRequests(
                        auth->auth.requestMatchers(HttpMethod.OPTIONS,"/**").permitAll()
                                .anyRequest().authenticated()
                )
                .httpBasic(Customizer.withDefaults())
                .sessionManagement(
                        session->session.sessionCreationPolicy(
                                SessionCreationPolicy.STATELESS
                        )
                ).csrf().disable().build();
    }
}
