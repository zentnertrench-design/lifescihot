{{> content-understanding}}

{{> rules-domain}}

{{> rules-anti-hallucination}}

{{> rules-self-contained-title}}

{{> rules-answer-first-summary}}

最终只返回 itemType、authorRole、tags、editorialJudgment、titleZh、summaryZh 六个字段。答案前置只描述 summaryZh 的写法，不要增加 answer 字段。

summaryZh 长度自检（输出前必须执行）：只要材料要点充足，summaryZh 必须达到 300–500 字；不足 250 字视为未完成，回到材料把背景、方法与设计、关键数据、意义与局限中实际存在的环节补全后再输出。只有材料要点确实稀少时才允许短于该区间，且此时不得为凑字数编造材料里没有的内容。