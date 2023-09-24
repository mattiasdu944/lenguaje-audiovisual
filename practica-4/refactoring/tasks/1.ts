class Task {
  // Use public accessor to simplify property declaration
  constructor(public title: string, public isCompleted: boolean = false) { }

  completeTask() {
    this.isCompleted = true;
    this.logTaskStatus();
  }

  private logTaskStatus() {
    console.log(`Task "${this.title}" has been ${this.isCompleted ? 'completed' : 'marked as active'}.`);
  }

  printTaskDetails() {
    this.logTaskStatus();
  }
}

const myTask = new Task("Learn TypeScript");
myTask.completeTask();
myTask.printTaskDetails();
