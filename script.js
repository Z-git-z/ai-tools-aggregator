// AI工具数据
const aiTools = [
    {
        id: 1,
        name: "ChatGPT",
        description: "OpenAI开发的强大对话AI，可用于问答、内容创作等多种场景。",
        category: "text",
        price: "freemium",
        url: "https://chat.openai.com",
        featured: true,
        new: false,
        image: "chatgpt.png"
    },
    {
        id: 2,
        name: "MidJourney",
        description: "AI图像生成工具，通过文本提示创建高质量艺术作品。",
        category: "image",
        price: "paid",
        url: "https://www.midjourney.com",
        featured: true,
        new: false,
        image: "midjourney.png"
    },
    {
        id: 3,
        name: "GitHub Copilot",
        description: "AI编程助手，可自动补全代码并提供智能建议。",
        category: "code",
        price: "paid",
        url: "https://github.com/features/copilot",
        featured: true,
        new: false,
        image: "copilot.png"
    },
    {
        id: 4,
        name: "Notion AI",
        description: "Notion内置的AI助手，帮助整理笔记、生成内容和优化工作流程。",
        category: "productivity",
        price: "paid",
        url: "https://www.notion.so/product/ai",
        featured: true,
        new: false,
        image: "notion.png"
    },
    {
        id: 5,
        name: "Runway ML",
        description: "创意AI工具集，提供视频编辑、图像生成等多种AI功能。",
        category: "video",
        price: "freemium",
        url: "https://runwayml.com",
        featured: true,
        new: false,
        image: "runway.png"
    },
    {
        id: 6,
        name: "ElevenLabs",
        description: "先进的文本转语音工具，提供自然流畅的AI语音合成。",
        category: "audio",
        price: "freemium",
        url: "https://elevenlabs.io",
        featured: true,
        new: false,
        image: "elevenlabs.png"
    },
    {
        id: 7,
        name: "Jasper",
        description: "AI写作助手，帮助创建营销文案、博客文章等内容。",
        category: "text",
        price: "paid",
        url: "https://www.jasper.ai",
        featured: true,
        new: false,
        image: "jasper.png"
    },
    {
        id: 8,
        name: "DALL-E 3",
        description: "OpenAI的图像生成模型，可根据文本描述创建高质量图像。",
        category: "image",
        price: "freemium",
        url: "https://openai.com/dall-e",
        featured: true,
        new: true,
        image: "dalle.png"
    },
    // 更多工具...
    {
        id: 9,
        name: "Claude",
        description: "Anthropic开发的AI助手，专注于安全、有帮助的对话。",
        category: "text",
        price: "free",
        url: "https://www.anthropic.com",
        featured: false,
        new: false,
        image: "claude.png"
    },
    {
        id: 10,
        name: "Stable Diffusion",
        description: "开源的文本到图像生成模型，可本地运行。",
        category: "image",
        price: "free",
        url: "https://stablediffusionweb.com",
        featured: false,
        new: false,
        image: "stablediffusion.png"
    },
    {
        id: 11,
        name: "Bard",
        description: "Google的AI聊天机器人，整合了搜索引擎功能。",
        category: "text",
        price: "free",
        url: "https://bard.google.com",
        featured: false,
        new: false,
        image: "bard.png"
    },
    {
        id: 12,
        name: "Synthesia",
        description: "AI视频生成平台，可创建带有虚拟主持人的视频。",
        category: "video",
        price: "paid",
        url: "https://www.synthesia.io",
        featured: false,
        new: false,
        image: "synthesia.png"
    },
    {
        id: 13,
        name: "Murf",
        description: "AI语音生成器，提供多种语言和声音风格选择。",
        category: "audio",
        price: "freemium",
        url: "https://murf.ai",
        featured: false,
        new: false,
        image: "murf.png"
    },
    {
        id: 14,
        name: "Tabnine",
        description: "AI代码补全工具，支持多种编程语言和IDE。",
        category: "code",
        price: "freemium",
        url: "https://www.tabnine.com",
        featured: false,
        new: false,
        image: "tabnine.png"
    },
    {
        id: 15,
        name: "Copy.ai",
        description: "AI写作助手，专注于营销文案和商业写作。",
        category: "text",
        price: "freemium",
        url: "https://www.copy.ai",
        featured: false,
        new: false,
        image: "copyai.png"
    },
    {
        id: 16,
        name: "Fireflies",
        description: "AI会议助手，可自动记录、转录和分析会议内容。",
        category: "productivity",
        price: "freemium",
        url: "https://fireflies.ai",
        featured: false,
        new: false,
        image: "fireflies.png"
    },
    {
        id: 17,
        name: "Descript",
        description: "AI音频和视频编辑工具，提供转录和语音克隆功能。",
        category: "audio",
        price: "freemium",
        url: "https://www.descript.com",
        featured: false,
        new: false,
        image: "descript.png"
    },
    {
        id: 18,
        name: "Canva Magic Design",
        description: "Canva的AI设计工具，可自动生成视觉内容。",
        category: "image",
        price: "freemium",
        url: "https://www.canva.com/magic-design/",
        featured: false,
        new: false,
        image: "canva.png"
    },
    {
        id: 19,
        name: "GrammarlyGO",
        description: "Grammarly的AI写作助手，提供上下文感知的写作建议。",
        category: "text",
        price: "freemium",
        url: "https://www.grammarly.com/grammarlygo",
        featured: false,
        new: true,
        image: "grammarly.png"
    },
    {
        id: 20,
        name: "Adobe Firefly",
        description: "Adobe的创意生成AI，集成在Photoshop等创意工具中。",
        category: "image",
        price: "freemium",
        url: "https://www.adobe.com/sensei/generative-ai/firefly.html",
        featured: false,
        new: true,
        image: "firefly.png"
    },
    {
        id: 21,
        name: "Pictory",
        description: "AI视频创作工具，可将文本内容自动转换为视频。",
        category: "video",
        price: "freemium",
        url: "https://pictory.ai",
        featured: false,
        new: false,
        image: "pictory.png"
    },
    {
        id: 22,
        name: "Otter.ai",
        description: "AI会议转录工具，可实时记录和总结会议内容。",
        category: "productivity",
        price: "freemium",
        url: "https://otter.ai",
        featured: false,
        new: false,
        image: "otter.png"
    },
    {
        id: 23,
        name: "DeepL Write",
        description: "AI写作助手，提供语法检查和写作风格改进建议。",
        category: "text",
        price: "free",
        url: "https://www.deepl.com/write",
        featured: false,
        new: false,
        image: "deepl.png"
    },
    {
        id: 24,
        name: "Leonardo.Ai",
        description: "AI图像生成平台，提供高质量的创意图像生成。",
        category: "image",
        price: "freemium",
        url: "https://leonardo.ai",
        featured: false,
        new: true,
        image: "leonardo.png"
    },
    {
        id: 25,
        name: "HeyGen",
        description: "AI视频生成平台，可创建带有虚拟主持人的营销视频。",
        category: "video",
        price: "paid",
        url: "https://www.heygen.com",
        featured: false,
        new: false,
        image: "heygen.png"
    },
    {
        id: 26,
        name: "Boomy",
        description: "AI音乐生成工具，可快速创建原创音乐曲目。",
        category: "audio",
        price: "freemium",
        url: "https://boomy.com",
        featured: false,
        new: false,
        image: "boomy.png"
    },
    {
        id: 27,
        name: "Replit Ghostwriter",
        description: "基于浏览器的AI编程助手，支持多种编程语言。",
        category: "code",
        price: "freemium",
        url: "https://replit.com/site/ghostwriter",
        featured: false,
        new: false,
        image: "replit.png"
    },
    {
        id: 28,
        name: "Quillbot",
        description: "AI写作工具，提供改写、总结和语法检查功能。",
        category: "text",
        price: "freemium",
        url: "https://quillbot.com",
        featured: false,
        new: false,
        image: "quillbot.png"
    },
    {
        id: 29,
        name: "Tome",
        description: "AI演示文稿生成工具，可自动创建精美幻灯片。",
        category: "productivity",
        price: "freemium",
        url: "https://tome.app",
        featured: false,
        new: false,
        image: "tome.png"
    },
    {
        id: 30,
        name: "Krisp",
        description: "AI降噪工具，可消除通话中的背景噪音。",
        category: "audio",
        price: "freemium",
        url: "https://krisp.ai",
        featured: false,
        new: false,
        image: "krisp.png"
    },
    {
        id: 31,
        name: "Writesonic",
        description: "AI写作助手，专注于商业和营销内容创作。",
        category: "text",
        price: "freemium",
        url: "https://writesonic.com",
        featured: false,
        new: false,
        image: "writesonic.png"
    },
    {
        id: 32,
        name: "Playground AI",
        description: "免费的在线AI图像生成工具，基于Stable Diffusion。",
        category: "image",
        price: "free",
        url: "https://playgroundai.com",
        featured: false,
        new: false,
        image: "playground.png"
    },
    {
        id: 33,
        name: "Synthesys",
        description: "AI视频和语音生成平台，创建专业级媒体内容。",
        category: "video",
        price: "paid",
        url: "https://www.synthesys.io",
        featured: false,
        new: false,
        image: "synthesys.png"
    },
    {
        id: 34,
        name: "Soundraw",
        description: "AI音乐生成器，可创建免版税的背景音乐。",
        category: "audio",
        price: "freemium",
        url: "https://soundraw.io",
        featured: false,
        new: false,
        image: "soundraw.png"
    },
    {
        id: 35,
        name: "Amazon CodeWhisperer",
        description: "AWS的AI编程助手，提供实时代码建议。",
        category: "code",
        price: "free",
        url: "https://aws.amazon.com/codewhisperer/",
        featured: false,
        new: false,
        image: "codewhisperer.png"
    },
    {
        id: 36,
        name: "Rytr",
        description: "AI写作助手，帮助快速生成各种类型的内容。",
        category: "text",
        price: "freemium",
        url: "https://rytr.me",
        featured: false,
        new: false,
        image: "rytr.png"
    },
    {
        id: 37,
        name: "Beautiful.ai",
        description: "AI演示文稿设计工具，自动创建专业幻灯片。",
        category: "productivity",
        price: "paid",
        url: "https://www.beautiful.ai",
        featured: false,
        new: false,
        image: "beautiful.png"
    },
    {
        id: 38,
        name: "Lovo",
        description: "AI语音生成平台，提供逼真的文本转语音服务。",
        category: "audio",
        price: "freemium",
        url: "https://lovo.ai",
        featured: false,
        new: false,
        image: "lovo.png"
    },
    {
        id: 39,
        name: "InVideo",
        description: "AI视频创作平台，提供模板和自动编辑功能。",
        category: "video",
        price: "freemium",
        url: "https://invideo.io",
        featured: false,
        new: false,
        image: "invideo.png"
    },
    {
        id: 40,
        name: "Lex",
        description: "AI写作工具，专注于长篇内容创作和故事写作。",
        category: "text",
        price: "free",
        url: "https://lex.page",
        featured: false,
        new: true,
        image: "lex.png"
    },
    {
        id: 41,
        name: "DreamUp",
        description: "DeviantArt的AI图像生成工具，专为艺术家设计。",
        category: "image",
        price: "freemium",
        url: "https://www.dreamup.com",
        featured: false,
        new: false,
        image: "dreamup.png"
    },
    {
        id: 42,
        name: "AssemblyAI",
        description: "AI语音识别API，提供转录和音频分析服务。",
        category: "audio",
        price: "freemium",
        url: "https://www.assemblyai.com",
        featured: false,
        new: false,
        image: "assemblyai.png"
    },
    {
        id: 43,
        name: "Sourcegraph Cody",
        description: "AI编程助手，可理解整个代码库并提供智能建议。",
        category: "code",
        price: "free",
        url: "https://about.sourcegraph.com/cody",
        featured: false,
        new: true,
        image: "cody.png"
    },
    {
        id: 44,
        name: "Wordtune",
        description: "AI写作助手，帮助改写和优化句子结构。",
        category: "text",
        price: "freemium",
        url: "https://www.wordtune.com",
        featured: false,
        new: false,
        image: "wordtune.png"
    },
    {
        id: 45,
        name: "Mem",
        description: "AI笔记助手，自动组织和连接笔记内容。",
        category: "productivity",
        price: "freemium",
        url: "https://mem.ai",
        featured: false,
        new: false,
        image: "mem.png"
    },
    {
        id: 46,
        name: "VocalRemover",
        description: "AI音频处理工具，可从歌曲中分离人声和伴奏。",
        category: "audio",
        price: "free",
        url: "https://vocalremover.org",
        featured: false,
        new: false,
        image: "vocalremover.png"
    },
    {
        id: 47,
        name: "Pictory",
        description: "AI视频创作工具，可将文本内容自动转换为视频。",
        category: "video",
        price: "freemium",
        url: "https://pictory.ai",
        featured: false,
        new: false,
        image: "pictory.png"
    },
    {
        id: 48,
        name: "NovelAI",
        description: "AI故事写作助手，帮助创作小说和叙事内容。",
        category: "text",
        price: "paid",
        url: "https://novelai.net",
        featured: false,
        new: false,
        image: "novelai.png"
    },
    {
        id: 49,
        name: "Artbreeder",
        description: "AI艺术创作平台，可混合和生成独特图像。",
        category: "image",
        price: "freemium",
        url: "https://www.artbreeder.com",
        featured: false,
        new: false,
        image: "artbreeder.png"
    },
    {
        id: 50,
        name: "Synthesys",
        description: "AI视频和语音生成平台，创建专业级媒体内容。",
        category: "video",
        price: "paid",
        url: "https://www.synthesys.io",
        featured: false,
        new: false,
        image: "synthesys.png"
    },
    {
        id: 51,
        name: "AIVA",
        description: "AI音乐作曲工具，可创作古典和现代风格的音乐。",
        category: "audio",
        price: "freemium",
        url: "https://www.aiva.ai",
        featured: false,
        new: false,
        image: "aiva.png"
    },
    {
        id: 52,
        name: "Cursor",
        description: "AI代码编辑器，提供智能补全和错误检测功能。",
        category: "code",
        price: "freemium",
        url: "https://www.cursor.sh",
        featured: false,
        new: true,
        image: "cursor.png"
    },
    {
        id: 53,
        name: "Sudowrite",
        description: "AI写作助手，专为小说作者和创意写作设计。",
        category: "text",
        price: "paid",
        url: "https://www.sudowrite.com",
        featured: false,
        new: false,
        image: "sudowrite.png"
    },
    {
        id: 54,
        name: "Taskade",
        description: "AI生产力工具，提供任务管理和思维导图功能。",
        category: "productivity",
        price: "freemium",
        url: "https://www.taskade.com",
        featured: false,
        new: false,
        image: "taskade.png"
    },
    {
        id: 55,
        name: "Podcastle",
        description: "AI播客制作工具，提供音频编辑和增强功能。",
        category: "audio",
        price: "freemium",
        url: "https://podcastle.ai",
        featured: false,
        new: false,
        image: "podcastle.png"
    },
    {
        id: 56,
        name: "Synthesia",
        description: "AI视频生成平台，可创建带有虚拟主持人的视频。",
        category: "video",
        price: "paid",
        url: "https://www.synthesia.io",
        featured: false,
        new: false,
        image: "synthesia.png"
    },
    {
        id: 57,
        name: "Perplexity AI",
        description: "AI问答工具，提供准确和引用的答案。",
        category: "text",
        price: "free",
        url: "https://www.perplexity.ai",
        featured: false,
        new: true,
        image: "perplexity.png"
    },
    {
        id: 58,
        name: "NightCafe",
        description: "AI艺术生成平台，提供多种艺术风格选择。",
        category: "image",
        price: "freemium",
        url: "https://creator.nightcafe.studio",
        featured: false,
        new: false,
        image: "nightcafe.png"
    },
    {
        id: 59,
        name: "Resemble AI",
        description: "AI语音克隆工具，可创建自定义语音模型。",
        category: "audio",
        price: "paid",
        url: "https://www.resemble.ai",
        featured: false,
        new: false,
        image: "resemble.png"
    },
    {
        id: 60,
        name: "Blackbox",
        description: "AI代码助手，可从任何地方提取和生成代码。",
        category: "code",
        price: "freemium",
        url: "https://www.useblackbox.io",
        featured: false,
        new: false,
        image: "blackbox.png"
    },
    {
        id: 61,
        name: "HyperWrite",
        description: "AI写作助手，帮助完成电子邮件、文档等内容。",
        category: "text",
        price: "freemium",
        url: "https://hyperwriteai.com",
        featured: false,
        new: false,
        image: "hyperwrite.png"
    },
    {
        id: 62,
        name: "Motion",
        description: "AI日程管理工具，自动优化每日任务安排。",
        category: "productivity",
        price: "paid",
        url: "https://www.usemotion.com",
        featured: false,
        new: false,
        image: "motion.png"
    },
    {
        id: 63,
        name: "Voicemod",
        description: "AI实时变声工具，适用于游戏和内容创作。",
        category: "audio",
        price: "freemium",
        url: "https://www.voicemod.net",
        featured: false,
        new: false,
        image: "voicemod.png"
    },
    {
        id: 64,
        name: "Fliki",
        description: "AI视频创作工具，可将文本转换为带语音的视频。",
        category: "video",
        price: "freemium",
        url: "https://fliki.ai",
        featured: false,
        new: true,
        image: "fliki.png"
    },
    {
        id: 65,
        name: "Character.AI",
        description: "AI角色聊天平台，可与虚拟角色进行对话。",
        category: "text",
        price: "free",
        url: "https://beta.character.ai",
        featured: false,
        new: false,
        image: "character.png"
    },
    {
        id: 66,
        name: "Dream by Wombo",
        description: "AI艺术生成应用，可快速创建独特图像。",
        category: "image",
        price: "free",
        url: "https://dream.ai",
        featured: false,
        new: false,
        image: "wombo.png"
    },
    {
        id: 67,
        name: "Cleanvoice",
        description: "AI音频编辑工具，自动去除录音中的填充词和噪音。",
        category: "audio",
        price: "freemium",
        url: "https://cleanvoice.ai",
        featured: false,
        new: false,
        image: "cleanvoice.png"
    },
    {
        id: 68,
        name: "Phind",
        description: "AI编程问答工具，帮助解决开发问题。",
        category: "code",
        price: "free",
        url: "https://www.phind.com",
        featured: false,
        new: true,
        image: "phind.png"
    },
    {
        id: 69,
        name: "TextCortex",
        description: "AI写作助手，帮助创建各种类型的内容。",
        category: "text",
        price: "freemium",
        url: "https://textcortex.com",
        featured: false,
        new: false,
        image: "textcortex.png"
    },
    {
        id: 70,
        name: "Tavily",
        description: "AI研究助手，可快速查找和总结网络信息。",
        category: "productivity",
        price: "freemium",
        url: "https://tavily.com",
        featured: false,
        new: true,
        image: "tavily.png"
    },
    {
        id: 71,
        name: "Uberduck",
        description: "AI语音合成平台，提供多种流行声音选择。",
        category: "audio",
        price: "freemium",
        url: "https://uberduck.ai",
        featured: false,
        new: false,
        image: "uberduck.png"
    },
    {
        id: 72,
        name: "Pika Labs",
        description: "AI视频生成工具，可从文本或图像创建短视频。",
        category: "video",
        price: "free",
        url: "https://pika.art",
        featured: false,
        new: true,
        image: "pika.png"
    },
    {
        id: 73,
        name: "DeepL Translator",
        description: "AI驱动的翻译工具，提供高质量的文本翻译。",
        category: "text",
        price: "freemium",
        url: "https://www.deepl.com/translator",
        featured: false,
        new: false,
        image: "deepl.png"
    },
    {
        id: 74,
        name: "Let's Enhance",
        description: "AI图像增强工具，可提高图像分辨率和质量。",
        category: "image",
        price: "freemium",
        url: "https://letsenhance.io",
        featured: false,
        new: false,
        image: "letsenhance.png"
    },
    {
        id: 75,
        name: "Adobe Podcast",
        description: "AI音频增强工具，可改善录音质量。",
        category: "audio",
        price: "free",
        url: "https://podcast.adobe.com",
        featured: false,
        new: false,
        image: "adobepodcast.png"
    },
    {
        id: 76,
        name: "Codeium",
        description: "AI代码补全工具，支持多种编程语言。",
        category: "code",
        price: "free",
        url: "https://codeium.com",
        featured: false,
        new: true,
        image: "codeium.png"
    },
    {
        id: 77,
        name: "Writer",
        description: "AI写作助手，专注于商业和专业写作。",
        category: "text",
        price: "paid",
        url: "https://writer.com",
        featured: false,
        new: false,
        image: "writer.png"
    },
    {
        id: 78,
        name: "Rewind AI",
        description: "AI记忆助手，记录和检索数字活动。",
        category: "productivity",
        price: "paid",
        url: "https://www.rewind.ai",
        featured: false,
        new: true,
        image: "rewind.png"
    },
    {
        id: 79,
        name: "Vocol.ai",
        description: "AI语音转录和摘要工具，适用于会议和访谈。",
        category: "audio",
        price: "freemium",
        url: "https://vocol.ai",
        featured: false,
        new: false,
        image: "vocol.png"
    },
    {
        id: 80,
        name: "Synthesys",
        description: "AI视频和语音生成平台，创建专业级媒体内容。",
        category: "video",
        price: "paid",
        url: "https://www.synthesys.io",
        featured: false,
        new: false,
        image: "synthesys.png"
    },
    {
        id: 81,
        name: "ChatPDF",
        description: "AI PDF阅读助手，可总结和回答PDF内容问题。",
        category: "text",
        price: "freemium",
        url: "https://www.chatpdf.com",
        featured: false,
        new: true,
        image: "chatpdf.png"
    },
    {
        id: 82,
        name: "Nijijourney",
        description: "AI动漫风格图像生成工具，由MidJourney团队开发。",
        category: "image",
        price: "paid",
        url: "https://nijijourney.com",
        featured: false,
        new: true,
        image: "niji.png"
    },
    {
        id: 83,
        name: "Vizrt",
        description: "AI视频制作工具，用于实时图形和虚拟演播室。",
        category: "video",
        price: "paid",
        url: "https://www.vizrt.com",
        featured: false,
        new: false,
        image: "vizrt.png"
    },
    {
        id: 84,
        name: "Sonantic",
        description: "AI语音情感合成工具，创建富有表现力的语音。",
        category: "audio",
        price: "paid",
        url: "https://www.sonantic.io",
        featured: false,
        new: false,
        image: "sonantic.png"
    },
    {
        id: 85,
        name: "Mintlify",
        description: "AI代码文档生成工具，自动创建代码文档。",
        category: "code",
        price: "freemium",
        url: "https://www.mintlify.com",
        featured: false,
        new: true,
        image: "mintlify.png"
    },
    {
        id: 86,
        name: "LongShot",
        description: "AI内容研究工具，帮助创建事实准确的博客内容。",
        category: "text",
        price: "freemium",
        url: "https://www.longshot.ai",
        featured: false,
        new: false,
        image: "longshot.png"
    },
    {
        id: 87,
        name: "TimeHero",
        description: "AI任务管理工具，自动安排和优化工作流程。",
        category: "productivity",
        price: "paid",
        url: "https://www.timehero.com",
        featured: false,
        new: false,
        image: "timehero.png"
    },
    {
        id: 88,
        name: "Altered",
        description: "AI语音变换工具，可实时改变声音特征。",
        category: "audio",
        price: "paid",
        url: "https://www.altered.ai",
        featured: false,
        new: false,
        image: "altered.png"
    },
    {
        id: 89,
        name: "Synthesia",
        description: "AI视频生成平台，可创建带有虚拟主持人的视频。",
        category: "video",
        price: "paid",
        url: "https://www.synthesia.io",
        featured: false,
        new: false,
        image: "synthesia.png"
    },
    {
        id: 90,
        name: "SciSummary",
        description: "AI科学论文摘要工具，快速理解研究内容。",
        category: "text",
        price: "freemium",
        url: "https://scisummary.com",
        featured: false,
        new: true,
        image: "scisummary.png"
    },
    {
        id: 91,
        name: "AutoDraw",
        description: "AI绘图工具，可将简单草图转换为精美插图。",
        category: "image",
        price: "free",
        url: "https://www.autodraw.com",
        featured: false,
        new: false,
        image: "autodraw.png"
    },
    {
        id: 92,
        name: "iMyFone MagicMic",
        description: "AI实时变声软件，提供多种声音效果。",
        category: "audio",
        price: "paid",
        url: "https://www.imyfone.com/magicmic/",
        featured: false,
        new: false,
        image: "magicmic.png"
    },
    {
        id: 93,
        name: "Bito",
        description: "AI编程助手，帮助编写、理解和优化代码。",
        category: "code",
        price: "freemium",
        url: "https://bito.ai",
        featured: false,
        new: true,
        image: "bito.png"
    },
    {
        id: 94,
        name: "Anyword",
        description: "AI营销文案工具，预测内容效果并优化文案。",
        category: "text",
        price: "paid",
        url: "https://www.anyword.com",
        featured: false,
        new: false,
        image: "anyword.png"
    },
    {
        id: 95,
        name: "Clockwise",
        description: "AI日历优化工具，自动安排会议保护专注时间。",
        category: "productivity",
        price: "freemium",
        url: "https://www.getclockwise.com",
        featured: false,
        new: false,
        image: "clockwise.png"
    },
    {
        id: 96,
        name: "LALAL.AI",
        description: "AI音频分离工具，可从歌曲中提取人声或乐器。",
        category: "audio",
        price: "freemium",
        url: "https://www.lalal.ai",
        featured: false,
        new: false,
        image: "lalal.png"
    },
    {
        id: 97,
        name: "Synthesia",
        description: "AI视频生成平台，可创建带有虚拟主持人的视频。",
        category: "video",
        price: "paid",
        url: "https://www.synthesia.io",
        featured: false,
        new: false,
        image: "synthesia.png"
    },
    {
        id: 98,
        name: "Elicit",
        description: "AI研究助手，帮助查找和分析学术论文。",
        category: "text",
        price: "freemium",
        url: "https://elicit.org",
        featured: false,
        new: true,
        image: "elicit.png"
    },
    {
        id: 99,
        name: "GFP-GAN",
        description: "AI照片修复工具，可修复老旧或损坏的照片。",
        category: "image",
        price: "free",
        url: "https://github.com/TencentARC/GFPGAN",
        featured: false,
        new: false,
        image: "gfpgan.png"
    },
    {
        id: 100,
        name: "Rask AI",
        description: "AI视频本地化工具，可自动翻译和配音视频内容。",
        category: "video",
        price: "paid",
        url: "https://www.rask.ai",
        featured: false,
        new: true,
        image: "rask.png"
    }
];

// 分类映射
const categoryMap = {
    text: "文本生成",
    image: "图像生成",
    video: "视频处理",
    audio: "音频处理",
    code: "编程辅助",
    productivity: "工作效率",
    marketing: "营销工具",
    education: "教育学习"
};

// 价格映射
const priceMap = {
    free: "免费",
    freemium: "免费增值",
    paid: "付费"
};

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 渲染精选工具
    renderFeaturedTools();
    
    // 渲染所有工具
    renderAllTools();
    
    // 渲染最新工具
    renderNewTools();
    
    // 添加分类卡片点击事件
    setupCategoryCards();
    
    // 添加筛选功能
    setupFilters();
    
    // 添加搜索功能
    setupSearch();
});

// 渲染精选工具
function renderFeaturedTools() {
    const featuredToolsContainer = document.getElementById('featured-tools');
    const featuredTools = aiTools.filter(tool => tool.featured);
    
    featuredTools.forEach(tool => {
        featuredToolsContainer.appendChild(createToolCard(tool));
    });
}

// 渲染所有工具
function renderAllTools() {
    const allToolsContainer = document.getElementById('all-tools-grid');
    
    aiTools.forEach(tool => {
        allToolsContainer.appendChild(createToolCard(tool));
    });
}

// 渲染最新工具
function renderNewTools() {
    const newToolsContainer = document.getElementById('new-tools');
    const newTools = aiTools.filter(tool => tool.new);
    
    newTools.forEach(tool => {
        newToolsContainer.appendChild(createToolCard(tool));
    });
}

// 创建工具卡片
function createToolCard(tool) {
    const toolCard = document.createElement('div');
    toolCard.className = 'tool-card';
    toolCard.dataset.category = tool.category;
    toolCard.dataset.price = tool.price;
    toolCard.dataset.name = tool.name.toLowerCase();
    
    toolCard.innerHTML = `
        <a href="${tool.url}" target="_blank" rel="noopener noreferrer">
            <div class="tool-card-img">
                <img src="images/${tool.image}" alt="${tool.name}">
            </div>
            <div class="tool-card-content">
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <div class="tool-card-meta">
                    <span class="tool-card-category">${categoryMap[tool.category]}</span>
                    <span class="tool-card-price ${tool.price}">${priceMap[tool.price]}</span>
                </div>
            </div>
        </a>
    `;
    
    return toolCard;
}

// 设置分类卡片点击事件
function setupCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterToolsByCategory(category);
            
            // 滚动到所有工具区域
            document.getElementById('all-tools').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// 按分类筛选工具
function filterToolsByCategory(category) {
    // 设置筛选器值
    document.getElementById('category-filter').value = category;
    
    // 触发筛选
    filterTools();
}

// 设置筛选功能
function setupFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    
    categoryFilter.addEventListener('change', filterTools);
    priceFilter.addEventListener('change', filterTools);
}

// 筛选工具
function filterTools() {
    const categoryFilter = document.getElementById('category-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const toolCards = document.querySelectorAll('#all-tools-grid .tool-card');
    
    toolCards.forEach(card => {
        const cardCategory = card.dataset.category;
        const cardPrice = card.dataset.price;
        
        const categoryMatch = categoryFilter === 'all' || cardCategory === categoryFilter;
        const priceMatch = priceFilter === 'all' || cardPrice === priceFilter;
        
        if (categoryMatch && priceMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 设置搜索功能
function setupSearch() {
    const searchInput = document.getElementById('search-tools');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const toolCards = document.querySelectorAll('#all-tools-grid .tool-card');
        
        toolCards.forEach(card => {
            const toolName = card.dataset.name;
            
            if (toolName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}
