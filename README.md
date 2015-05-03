# Duit App

Duit (Do it) is a simple to-do app.

User story

Duit 1.0

1. User create newTask using the addButton at the bottom right corner of the screen.

2. User input taskInfo, taskPriority: low(1), medium(2), high(3), urgent(4) and/or taskDeadline.

3. By default all activeTask appears in the order of time added.

4. User can choose from 2 view mode: allView or priorityView using toggle switch on the top left corner

5. In priorityView, activeTask with taskPriority higher or equal to 
3 will be highlighted (highTask) while taskPriority lower than 3 will be dimmed down (lowTask)

6. activeTask that is checked off will move to completedTask.

7. activeTask that has passed deadline (expiredTask) will be alert and prompt("Your task has passed its deadline, do you wish to check it off or set a new deadline?"). If user chooses "check off", expiredTask becomes pastTask, if user chooses "set new deadline", currentTask is reset to newTask where taskInfo has been pre-filled, user can add new taskPriority and/or new taskDeadline.

8. User can view pastTask using the historyButton on the top right corner of the screen.

Duit 2.0 (things to consider)
 - Add categories
 - Alert approaching deadline?
 - Reactive pastTask (in case task needs to be done again)
 - Repeat option - for recurrentTasks
 - Drag to change order of currentTask
