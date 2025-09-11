package com.hanae.book.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Builder
public class RegistrationRequest {

    @NotEmpty(message = "Firstname is obligatory")
    @NotEmpty(message = "Firstname is obligatory")
    private String firstName;
    @NotEmpty(message = "Lastname is obligatory")
    @NotEmpty(message = "Lastname is obligatory")
    private String lastName;
    @Email(message = "Email is not formatted")
    @NotEmpty(message = "Email is obligatory")
    @NotEmpty(message = "Email is obligatory")
    private String email;
    @NotEmpty(message = "Password is obligatory")
    @NotEmpty(message = "Password is obligatory")
    @Size(min = 8, message = "Password should be 8 characters long minimum")
    private String password;}
