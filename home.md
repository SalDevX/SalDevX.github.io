---
layout: default
title: SalDevX - Portfolio
---
    






```
function test() {
  console.log("notice the blank line before this function?");
}
```


If the code boxes aren’t appearing, there might be an issue with the way Jekyll processes Markdown or how it's configured. Here's a checklist to help troubleshoot:

1. **Check your Markdown syntax**: Ensure that the backticks are on their own lines with no extra spaces.
    Example:
    ```markdown
    ```javascript
    console.log("Hello, world!");
    ```
    ```

2. **Ensure you have proper Markdown support**: Jekyll should process `.md` files with Markdown support by default. Verify that your `_config.yml` doesn't disable Markdown processing or override it.

3. **Check your Jekyll theme**: Some themes might have custom configurations or styles that prevent Markdown code blocks from being rendered as you expect. Check your theme's CSS and any overrides in `_config.yml`.

4. **Test with a simple setup**: Try this basic example in your `index.md` to rule out any theme issues:

    ```markdown
    # Test Code Block

    ```javascript
    console.log("Hello, world!");
    ```
    ```

    If this works in a new page or with no theme, it might be theme-related.

5. **Ensure the file extension is `.md`**: It’s important that the file is saved with the `.md` extension and is correctly processed by Jekyll.

6. **Clear cache or restart Jekyll**: Sometimes, Jekyll might need a restart to reprocess content if something isn't being rendered correctly. You can stop the Jekyll server and start it again.

If none of these suggestions work, could you provide a bit more context on how you're serving the site? Are you using `jekyll serve` locally, or are you deploying it to GitHub Pages?




### Third level header    ###

## Second level header ######