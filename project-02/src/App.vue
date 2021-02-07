<template>
  <div id="app">
    <h1>Tarefas</h1>

    <TaskProgress :progress="progress" />

    <NewTask @addTask="addTask" />

    <TaskGrid
      :tasks="tasks"
      @task-deleted="delTask"
      @task-changed="toogleTaskState"
    />
  </div>
</template>

<script>
import TaskGrid from "@/components/TaskGrid";
import TaskProgress from "@/components/TaskProgress";
import NewTask from "@/components/NewTask";

export default {
  components: { TaskGrid, NewTask, TaskProgress },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter((t) => t.completed).length;

      return Math.round((done / total) * 100) || 0;
    },
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
    },
  },
  created() {
    const json = localStorage.getItem("tasks");
    this.tasks = JSON.parse(json) || [];
  },
  data() {
    return {
      tasks: [
        // { name: "Lavar louça", completed: false },
        // { name: "Comprar blusa", completed: true },
      ],
    };
  },
  methods: {
    addTask(task) {
      const sameName = (t) => t.name === task.name;
      const reallyNew = this.tasks.filter(sameName).length === 0;
      reallyNew && this.tasks.push({ ...task, completed: false });
    },
    delTask(i) {
      this.tasks.splice(i, 1);
    },
    toogleTaskState(i) {
      this.tasks[i].completed = !this.tasks[i].completed;
    },
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
