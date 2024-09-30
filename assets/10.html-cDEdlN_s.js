import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,o as t}from"./app-DvRy08z3.js";const e="/blog_imgs/10/10_1.png",l={};function h(p,i){return t(),a("div",null,i[0]||(i[0]=[n('<h2 id="蓄水池算法" tabindex="-1"><a class="header-anchor" href="#蓄水池算法"><span>蓄水池算法</span></a></h2><p>蓄水池算法采样算法难的点不在于怎么实现蓄水池算法，难的点在于证明每一个点都能被同等的概率抽取。</p><p>蓄水池算法证明最好的两个教程是：</p><ol><li><a href="https://www.cnblogs.com/snowInPluto/p/5996269.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/snowInPluto/p/5996269.html</a></li><li><a href="https://www.jianshu.com/p/7a9ea6ece2af" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/7a9ea6ece2af</a></li></ol><p>其他的感觉说的不是很清楚。</p><p>蓄水池算法的主要逻辑：</p><p><img src="'+e+`" alt="image.png" loading="lazy"></p><p>蓄水池算法的Pthon实现：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> random</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> reservior_sampling</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    表示有 n 个数，随机采样 k 个</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    nums </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    res </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> []</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(k):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 前K个数字可以直接填充</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        res.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(nums[i])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(k, </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(nums)):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 假设 i == k (也是说这是 第 k + 1个元素), 那么 该数字有  k / (k + 1) 的概率被选中去去换</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        replace_idx </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> random.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">randint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, i)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> replace_idx </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> k:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            res[replace_idx] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[i]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> res</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">pool </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> reservior_sampling</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(pool)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># [78, 52, 41, 84, 66, 43, 25, 71, 45, 24]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const d=s(l,[["render",h],["__file","10.html.vue"]]),o=JSON.parse('{"path":"/post/10.html","title":"Python实现蓄水池算法","lang":"zh-CN","frontmatter":{"title":"Python实现蓄水池算法","id":10,"date":"2020-08-15T12:00:00.000Z","description":"用Python实现蓄水池算法","keywords":["蓄水池算法"],"tag":["面试锦囊"],"category":["面试锦囊"],"image":"blog_imgs/8/8_1.jpg","permalink":"/post/10.html","head":[["meta",{"property":"og:url","content":"https://bruceyuan.com/post/10.html"}],["meta",{"property":"og:site_name","content":"用代码打点酱油的 chaofa"}],["meta",{"property":"og:title","content":"Python实现蓄水池算法"}],["meta",{"property":"og:description","content":"用Python实现蓄水池算法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bruceyuan.com/blog_imgs/10/10_1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T10:01:39.000Z"}],["meta",{"property":"article:tag","content":"面试锦囊"}],["meta",{"property":"article:published_time","content":"2020-08-15T12:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-30T10:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python实现蓄水池算法\\",\\"image\\":[\\"https://bruceyuan.com/blog_imgs/10/10_1.png\\"],\\"datePublished\\":\\"2020-08-15T12:00:00.000Z\\",\\"dateModified\\":\\"2024-09-30T10:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"bbruceyuan\\",\\"url\\":\\"https://bruceyuan.com\\"}]}"]]},"headers":[{"level":2,"title":"蓄水池算法","slug":"蓄水池算法","link":"#蓄水池算法","children":[]}],"git":{"createdTime":1662801658000,"updatedTime":1727690499000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"bbruceyuan","email":"bruceyuan@123@gmail.com","commits":1},{"name":"bbruceyuan","email":"chaofa.yuan@bytedance.com","commits":1},{"name":"chaofa.yuan","email":"chaofa.yuan@bytedance.com","commits":1}]},"readingTime":{"minutes":0.9,"words":270},"filePathRelative":"post/技术/10.Python实现蓄水池算法.md","localizedDate":"2020年8月15日"}');export{d as comp,o as data};
