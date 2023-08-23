package bbeb.website.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

public class CommentDTO {

    @Data
    @Getter
    public static class CreateCommentRequestDTO {
        private String value;
        private String type;
        private Long postId;
    }

    @Data
    @Getter
    public static class PutCommentRequestDTO {
        private String value;
        private String type;
    }

    @Data
    @Setter
    public static class CommentResponseDTO {
        private String value;
        private String writer;
        private String profileUrl;
        private LocalDateTime createDate;
        private String type;

        @QueryProjection

        public CommentResponseDTO(String value, String writer, String profileUrl, LocalDateTime createDate, String type) {
            this.value = value;
            this.writer = writer;
            this.profileUrl = profileUrl;
            this.createDate = createDate;
            this.type = type;
        }
    }
}