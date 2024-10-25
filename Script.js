// Define main function (script entry)

function main(config) {
  // 定义前置规则
  const prependRules = [
    'DOMAIN-SUFFIX,gstatic.com,🐟 漏网之鱼',
    'DOMAIN,community.oneplus.com,🐟 漏网之鱼'
  ];

  // 定义直连规则
  const directRules = [
    'IP-CIDR,123.123.123.123/32,DIRECT'
  ];

  // 检查并过滤掉不需要的规则
  const filteredRules = config.rules.filter(rule => rule !== "MATCH,,🐟 漏网之鱼,dns-failed");

  // 定义新的代理规则
  const rules = [
    ...prependRules,  // 添加 前置规则 到最前面
    ...directRules,   // 添加 直连规则 到前面
    ...filteredRules, // 将过滤后的规则展开并添加到新的代理规则中
  ];

  // 检查是否存在 "MATCH,🐟 漏网之鱼" 规则，如果不存在，则在末尾添加
  if (!rules.includes("MATCH,🐟 漏网之鱼")) {
    rules.push("MATCH,🐟 漏网之鱼");
  }

  // 更新 config 对象中的 代理规则 属性
  config['rules'] = rules;

  // 返回更新后的 config 对象
  return config;
}
