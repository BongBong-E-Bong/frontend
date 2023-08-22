package bbeb.website.domain.post;

import bbeb.website.domain.member.Member;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "post")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    @Id @GeneratedValue
    @Column(name = "post_id")
    private Long id;

    private String title;

    private String thumbnail;

    private Long isPinned;

    private LocalDateTime createdDate;

    private Long view;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "post")
    private List<Content> contents;

    @OneToMany(mappedBy = "post")
    private List<PostLike> postLikes;

    @OneToMany(mappedBy = "post")
    private List<PostTag> postTags;
}