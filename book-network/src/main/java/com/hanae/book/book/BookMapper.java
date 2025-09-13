package com.hanae.book.book;

import org.springframework.stereotype.Service;

@Service
public class BookMapper {
    public Book toBook(BookRequest request){
        return Book.builder()
                .id(request.id())
                .title(request.title())
                .authorName(request.authorName())
                .synopsis(request.synopsis())
                .archived(false)
                .shareable(request.shareable())
                .build();
    }

    public BookResponse toBookReponse(Book book) {
        return BookResponse.builder()
                .id(book.getId())
                .title(book.getTitle())
                .authorName(book.getAuthorName())
                .synopsis(book.getSynopsis())
                .shareable(book.isShareable())
                .isbn(book.getIsbn())
                .rate(book.getRate())
                .archived(book.isArchived())
                .owner(book.getOwner().fullName())
                //.cover()
                .build();
    }
}
