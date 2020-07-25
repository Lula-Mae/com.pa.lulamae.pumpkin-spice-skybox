try
{
    if (model && model.skyBoxes)
    {
        model.skyBoxes.push({text: 'Pumpkin Spice by Lula Mae', value: '/pa/sky/terrain/textures/com.pa.lulamae.pumpkin-spice-skybox/skybox.json'});
    }
}
catch (e)
{
    console.trace(e);
}