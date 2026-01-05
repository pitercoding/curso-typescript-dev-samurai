(() => {
  enum NotificationPlatform {
    SMS = "SMS",
    EMAIL = "EMAIL",
    PUSH_NOTIFICATION = "PUSH_NOTIFICATION",
  }

  enum ViewMode {
    TODO = "TODO",
    REMINDER = "REMINDER",
  }

  const UUID = (): string => {
    return Math.random().toString(32).substring(2, 9); //gera ID único sem persistir em um BD
  };

  const dateUtils = {
    today(): Date {
      return new Date();
    },

    tomorrow() {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    },

    formatDate(date: Date): string {
      const day = String(date.getDate());
      const month = String(date.getMonth() + 1);
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    },
  };

  interface Task {
    id: string;
    dateCreated: Date;
    dateUpdated: Date;
    description: string;
    render(): string;
  }

  class Reminder implements Task {
    id: string = UUID();
    dateCreated: Date = dateUtils.today();
    dateUpdated: Date = dateUtils.today();
    description: string = "";

    date: Date = dateUtils.tomorrow();
    notifications: Array<NotificationPlatform> = [NotificationPlatform.EMAIL];

    constructor(
      description: string,
      date: Date,
      notifications: Array<NotificationPlatform>
    ) {
      this.description = description;
      this.date = date;
      this.notifications = notifications;
    }

    render(): string {
      return `
            ---> Reminder <---
            description: ${this.description}
            date: ${dateUtils.formatDate(this.date)}
            plataform: ${this.notifications.join(",")}
            `;
    }
  }

  class Todo implements Task {
    id: string = UUID();
    dateCreated: Date = dateUtils.today();
    dateUpdated: Date = dateUtils.today();
    description: string = "";

    done: boolean = false;

    constructor(description: string) {
      this.description = description;
    }

    render(): string {
      return `
            ---> TODO <---
            description: ${this.description}
            done: ${this.done}
            `;
    }
  }

  const todo = new Todo("Todo criado com classe!");

  const reminder = new Reminder("Reminder criado com classe!", new Date(), [
    NotificationPlatform.EMAIL,
  ]);

  const taskView = {
    getTodo(form: HTMLFormElement): Todo {
      const todoDescription = form.todoDescription.value;
      form.reset();
      return new Todo(todoDescription);
    },

    getReminder(form: HTMLFormElement): Reminder {
      const reminderDescription = form.reminderDescription.value;

      const reminderDate = new Date(form.scheduleDate.value);

      const reminderNotifications: Array<NotificationPlatform> = [
        form.notification.value as NotificationPlatform,
      ];

      form.reset();

      return new Reminder(
        reminderDescription,
        reminderDate,
        reminderNotifications
      );
    },
    render(tasks: Array<Task>, mode: ViewMode) {
      const tasksList = document.getElementById("tasksList");
      while (tasksList?.firstChild) {
        tasksList.removeChild(tasksList.firstChild);
      } //Lista vazia

      tasks.forEach((task) => {
        const li = document.createElement("LI");
        const textNode = document.createTextNode(task.render());
        li.appendChild(textNode);
        tasksList?.appendChild(li);
      });

      const todoSet = document.getElementById("todoSet");
      const reminderSet = document.getElementById("reminderSet");

      if (mode === ViewMode.TODO) {
        todoSet!.style.display = "block";
        reminderSet!.style.display = "none";

        // habilita TODO
        (
          document.querySelector('[name="todoDescription"]') as HTMLInputElement
        ).required = true;

        // desabilita REMINDER
        (document.querySelector('[name="reminderDescription"]') as HTMLInputElement).required = false;
        (document.querySelector('[name="scheduleDate"]') as HTMLInputElement).required = false;
      } else {
        reminderSet!.style.display = "block";
        todoSet!.style.display = "none";

        // habilita REMINDER
        (document.querySelector('[name="reminderDescription"]') as HTMLInputElement).required = true;
        (document.querySelector('[name="scheduleDate"]') as HTMLInputElement).required = true;

        // desabilita TODO
        (document.querySelector('[name="todoDescription"]') as HTMLInputElement).required = false;
      }
    },
  };

  const TaskController = (view: typeof taskView) => {
    const tasks: Array<Task> = [];
    let mode: ViewMode = ViewMode.TODO;

    const handleEvent = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      switch (mode as ViewMode) {
        case ViewMode.TODO:
          tasks.push(view.getTodo(form));
          break;
        case ViewMode.REMINDER:
          tasks.push(view.getReminder(form));
          break;
        default:
          break;
      }
      view.render(tasks, mode);
    };

    const handleToggleMode = () => {
      switch (mode as ViewMode) {
        case ViewMode.TODO:
          mode = ViewMode.REMINDER;
          break;
        case ViewMode.REMINDER:
          mode = ViewMode.TODO;
          break;
      }
      view.render(tasks, mode);
    };

    document
      .getElementById("toggleMode")
      ?.addEventListener("click", handleToggleMode);
    document
      .getElementById("taskForm")
      ?.addEventListener("submit", handleEvent);
  };

  TaskController(taskView);
})();
