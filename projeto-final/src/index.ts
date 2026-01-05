(() => {

    enum NotificationPlataform {
        SMS = 'SMS',
        EMAIL = 'EMAIL',
        PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
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
        description: string = '';

        date: Date = dateUtils.tomorrow();
        notifications: Array<NotificationPlataform> = [NotificationPlataform.EMAIL];

        constructor(description: string, date: Date, notifications: Array<NotificationPlataform>) {
            this.description = description;
            this.date = date;
            this.notifications = notifications;
        }

        render(): string {
            return `
            ---> Reminder <---
            description: ${this.description}
            date: ${dateUtils.formatDate(this.date)}
            plataform: ${this.notifications.join(',')}
            `;
        }
        
    }

    class Todo implements Task {
        id: string = UUID();
        dateCreated: Date = dateUtils.today();
        dateUpdated: Date = dateUtils.today();
        description: string = '';

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

    const todo = new Todo('Todo criado com classe!')

    const reminder = new Reminder('Reminder criado com classe!', new Date(), [NotificationPlataform.EMAIL,]);

    const taskView = {
        render(tasks: Array<Task>) {
            const tasksList = document.getElementById('tasksList');
            while (tasksList?.firstChild) {
                tasksList.removeChild(tasksList.firstChild);
            } //Lista vazia

            tasks.forEach((task) => {
                const li = document.createElement('LI');
                const textNode = document.createTextNode(task.render());
                li.appendChild(textNode);
                tasksList?.appendChild(li);
            });
        },
    };

    const TaskController = (view: typeof taskView) => {
        const tasks: Array<Task> = [todo, reminder];

        const handleEvent = (event: Event) => {
            event.preventDefault();
            view.render(tasks);
        };

        document.getElementById('taskForm')?.addEventListener('submit', handleEvent);
    };

    TaskController(taskView);

})();



