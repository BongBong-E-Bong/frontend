package bbeb.website.repository.post;

import bbeb.website.domain.post.Content;
import bbeb.website.domain.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContentRepository extends JpaRepository<Content, Long> {
    List<Content> findByPost(Post post);
}