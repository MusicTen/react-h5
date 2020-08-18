module.exports = {
  'disableEmoji': false,
  'list': [
    'test', // 增加测试
    'feat', // 新功能 feature
    'fix', // 修复 bug
    'chore', // 构建过程或辅助工具的变动
    'docs', // 文档注释
    'refactor', // 重构(既不增加新功能，也不是修复bug)
    'style', // 代码格式(不影响代码运行的变动)
    'ci', // CI相关变更
    'perf' // 提高性能的代码更改
  ],
  'maxMessageLength': 64,
  'minMessageLength': 3,
  'questions': [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna'
  ],
  'scopes': [],
  'types': {
    'chore': {
      'description': 'Build process or auxiliary tool changes',
      'emoji': '🤖',
      'value': 'chore'
    },
    'ci': {
      'description': 'CI related changes',
      'emoji': '🎡',
      'value': 'ci'
    },
    'docs': {
      'description': 'Documentation only changes',
      'emoji': '✏️',
      'value': 'docs'
    },
    'feat': {
      'description': 'A new feature',
      'emoji': '🎸',
      'value': 'feat'
    },
    'fix': {
      'description': 'A bug fix',
      'emoji': '🐛',
      'value': 'fix'
    },
    'perf': {
      'description': 'A code change that improves performance',
      'emoji': '⚡️',
      'value': 'perf'
    },
    'refactor': {
      'description': 'A code change that neither fixes a bug or adds a feature',
      'emoji': '💡',
      'value': 'refactor'
    },
    'release': {
      'description': 'Create a release commit',
      'emoji': '🏹',
      'value': 'release'
    },
    'style': {
      'description': 'Markup, white-space, formatting, missing semi-colons...',
      'emoji': '💄',
      'value': 'style'
    },
    'test': {
      'description': 'Adding missing tests',
      'emoji': '💍',
      'value': 'test'
    }
  }
}
