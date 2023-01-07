import { useState } from "react";
import { ContextMessages } from "src/components/ContextMessages";
import { Sortable } from "src/components/Sortable/Sortable";
import { SurveyCard } from "src/components/Survey/SurveyCard";
import { TaskControlsOverridable } from "src/components/Survey/TaskControlsOverridable";

export const EvaluateTask = ({ tasks, trigger, mutate, mainBgClasses }) => {
  const [ranking, setRanking] = useState<number[]>([]);
  const submitResponse = (task) => {
    trigger({
      id: task.id,
      update_type: "message_ranking",
      content: {
        ranking,
      },
    });
  };

  const fetchNextTask = () => {
    setRanking([]);
    mutate();
  };

  const sortables = tasks[0].task.replies ? "replies" : "prompts";

  return (
    <div className={`p-12 ${mainBgClasses}`}>
      <SurveyCard className="max-w-7xl mx-auto h-fit mb-24">
        <h5 className="text-lg font-semibold mb-4">Instructions</h5>
        <p className="text-lg py-1">
          Given the following {sortables}, sort them from best to worst, best being first, worst being last.
        </p>
        {tasks[0].task.conversation ? <ContextMessages messages={tasks[0].task.conversation.messages} /> : null}
        <Sortable items={tasks[0].task[sortables]} onChange={setRanking} className="my-8" />
      </SurveyCard>

      <TaskControlsOverridable
        tasks={tasks}
        isValid={ranking.length == tasks[0].task[sortables].length}
        prepareForSubmit={() => setRanking(tasks[0].task[sortables].map((_, idx) => idx))}
        onSubmitResponse={submitResponse}
        onSkip={fetchNextTask}
      />
    </div>
  );
};
