export default interface cancerDataItem {
    id: string,
    title: string,
    desc: string
}

export const cancerImpact: cancerDataItem[] = [
    {
        id: '1',
        title: 'Leading Cause of Cancer Deaths',
        desc: 'Lung cancer is the leading cause of cancer-related mortality for both men and women worldwide.',
    },
    {
        id: '2',
        title: 'Poor Survival Rates',
        desc: 'Due to the fact that lung cancer is often diagnosed in late stages, the 5-year survival rate is significantly lower than many other types of cancer.'
    }
];
export const preventionImportance: cancerDataItem[] = [
    {
        id: '1',
        title: 'Smoking\'s Role',
        desc: 'Smoking is the number one cause of lung cancer, significantly increasing the risk (even secondhand smoke is dangerous).',
    },
    {
        id: '2',
        title: 'Other Risk Factors',
        desc: 'While smoking is primary, factors like exposure to radon, air pollution, certain chemicals, and family history can all contribute. Taking steps to minimize these risks also plays an important role in prevention.'
    },
    {
        id: '3',
        title: 'Impact Beyond Patients',
        desc: 'Lung cancer affects family, friends, and caregivers. Its devastating toll resonates in many lives, making prevention all the more essential.'
    }
];
