export default {
  _id: 'subtask-1',
  task: 'Create charts with sample data',
  project: {
    _id: 'project-1',
    name: 'Realization',
  },
  parentTask: {
    _id: 'task-1',
    task: 'Create an assignment on react-native',
  },
  plannedRate: 120,
  currentRate: 80,
  requiredRate: 140,
  remainingDays: 118,
  progresses: [
    {
      _id: 'progress-1',
      day: 'Mon',
      hours: 6,
    },
    {
      _id: 'progress-2',
      day: 'Tue',
      hours: 3,
    },
    {
      _id: 'progress-3',
      day: 'Wed',
      hours: 4,
    },
    {
      _id: 'progress-4',
      day: 'Thu',
      hours: 8,
    },
    {
      _id: 'progress-5',
      day: 'Fri',
      hours: 2,
    },
    {
      _id: 'progress-6',
      day: 'Sat',
      hours: 5,
    },
  ],
};
