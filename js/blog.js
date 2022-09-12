const main = async () => {
  const query = `
    {
      user(username: "-Ghostman") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const ApiResponse = await response.json();
  const blogs = ApiResponse.data.user.publication.posts;

  document.querySelector(".blogs").innerHTML += blogs.map((blog) => {
    return `<div class="col-md-5 d-flex ftco-animate fadeInUp ftco-animated">
    <div class="blog-entry justify-content-end">
      <a
        href='https://ghostman.hashnode.dev/${blog.slug}'
        class="block-20"
        style="background-image: url(${blog.coverImage})"
      >
      </a>
      <div class="text mt-3 float-right d-block">
        <h3 class="heading">
          <a href="https://ghostman.hashnode.dev/${blog.slug}"
            >${blog.title}</a
          >
        </h3>
        <p>${blog.brief}
        </p>
      </div>
    </div>
  </div>`;
  });
};

main();
