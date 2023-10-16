export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-max-line-length': [0, 'never', 'Infinity'],
        'subject-case': [0, 'never', 'sentence-case'],
        'footer-max-line-length': [0, 'never', 'Infinity'],
        'type-enum': [2, 'always', ['build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'test']],
    },
};
