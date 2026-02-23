"use client";

import { createProject, updateProject } from "@/lib/actions/projects";
import { useTransition } from "react";

interface ProjectFormProps {
    project?: any;
}

export default function ProjectForm({ project }: ProjectFormProps) {
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            if (project) {
                await updateProject(project.id, formData);
            } else {
                await createProject(formData);
            }
        });
    };

    return (
        <form action={handleSubmit} className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Category (Slug)</label>
                    <select
                        name="cat"
                        defaultValue={project?.cat || "chatbot"}
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                    >
                        <option value="chatbot">Chatbot</option>
                        <option value="voice">Voice Automation</option>
                        <option value="automation">Process Automation</option>
                        <option value="data">Data AI</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Emoji Icon</label>
                    <input
                        name="emoji"
                        defaultValue={project?.emoji}
                        required
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                        placeholder="e.g. 🤖"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Display Tag</label>
                    <input
                        name="tag"
                        defaultValue={project?.tag}
                        required
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                        placeholder="e.g. AI Automation"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Display Order</label>
                    <input
                        name="order"
                        type="number"
                        defaultValue={project?.order ?? 0}
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Project Name</label>
                <input
                    name="name"
                    defaultValue={project?.name}
                    required
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                    placeholder="e.g. Youth Revisited Chatbot"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Short Description</label>
                <textarea
                    name="desc"
                    defaultValue={project?.desc}
                    required
                    rows={3}
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF] resize-none"
                    placeholder="Briefly describe the project..."
                />
            </div>

            <div className="pt-4">
                <button
                    type="submit"
                    disabled={isPending}
                    className="px-6 py-2 bg-[#00A3FF] hover:bg-[#0082CC] text-white rounded-lg transition-colors font-medium disabled:opacity-50"
                >
                    {isPending ? "Saving..." : project ? "Update Project" : "Create Project"}
                </button>
            </div>
        </form>
    );
}
