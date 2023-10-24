module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
  },
  prompt: {
    questions: {
      type: {
        description: '请选择您要提交的更改类型',
        enum: {
          feat: {
            description: '新增了一个或多个功能',
            title: '功能',
            emoji: '🎸',
          },
          fix: {
            description: '修复了一个或多个错误',
            title: 'Bug 修复',
            emoji: '🐛',
          },
          chore: {
            description: '构建流程或辅助工具更改',
            title: '杂活',
            emoji: '🤖',
          },
          docs: {
            description: '几乎只有文档更改',
            title: '文档',
            emoji: '✏️',
          },
          style: {
            description: '不影响代码含义的更改（代码格式化）',
            title: '代码格式化',
            emoji: '💄',
          },
          refactor: {
            description: '既不修复错误也不添加功能的代码更改（代码重构）',
            title: '代码重构',
            emoji: '💡',
          },
          perf: {
            description: '提高性能的代码更改',
            title: '性能优化',
            emoji: '⚡️',
          },
          test: {
            description: '添加缺失的测试用例或纠正现有的测试用例',
            title: '测试',
            emoji: '💍',
          },
          ci: {
            description: '对 CI 配置文件和脚本的更改',
            title: '持续集成',
            emoji: '🎡',
          },
          revert: {
            description: '恢复之前的提交（代码回滚）',
            title: '回滚',
            emoji: '⏪',
          },
        },
      },
      scope: {
        description: '此次更改的范围是什么（例如组件或文件名）',
      },
      subject: {
        description: '写一个简短的、命令式的更改描述',
      },
      body: {
        description: '提供更详细的更改说明',
      },
    },
  },
};
